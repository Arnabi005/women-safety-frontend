import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getContacts, createContact, updateContact, deleteContact } from '../services/contactService';
import ContactCard from '../components/contacts/ContactCard';
import ContactModal from '../components/contacts/ContactModal';
import {
  Users,
  UserPlus,
  Search,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Loader2
} from 'lucide-react';

const TrustedContactsPage = () => {
  const { user } = useAuth();
  const toast = useToast();

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const res = await getContacts();
      if (res.success) {
        setContacts(res.contacts || []);
      }
    } catch (err) {
      toast.error('Failed to load trusted contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingContact(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (contact) => {
    setEditingContact(contact);
    setModalOpen(true);
  };

  const handleSaveContact = async (formData) => {
    if (editingContact) {
      const res = await updateContact(editingContact._id, formData);
      if (res.success) {
        toast.success(`Contact "${formData.name}" updated successfully.`);
        loadContacts();
      }
    } else {
      const res = await createContact(formData);
      if (res.success) {
        toast.success(`Contact "${formData.name}" added to your emergency circle.`);
        loadContacts();
      }
    }
  };

  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to remove this trusted contact?')) {
      try {
        const res = await deleteContact(id);
        if (res.success) {
          toast.success('Trusted contact removed.');
          setContacts((prev) => prev.filter((c) => c._id !== id));
        }
      } catch (err) {
        toast.error('Failed to delete contact.');
      }
    }
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone?.includes(searchTerm) ||
      c.relationship?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contacts-page">
      <div className="container">
        {/* Header Strip */}
        <div className="contacts-header-wrapper glass-card">
          <div className="header-info">
            <div className="header-badge">
              <Users size={16} color="#f43f5e" />
              <span>Personal Emergency Circle</span>
            </div>
            <h1>Trusted Emergency Contacts</h1>
            <p>
              Your trusted circle receives instantaneous WhatsApp and SMS broadcasts containing your live GPS coordinates whenever you trigger an SOS.
            </p>
          </div>

          <button onClick={handleOpenAdd} className="btn btn-primary btn-lg">
            <UserPlus size={18} />
            <span>Add Trusted Contact</span>
          </button>
        </div>

        {/* Search & Statistics Bar */}
        <div className="contacts-toolbar">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search contacts by name, relationship, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="circle-stats-badge">
            <span>{contacts.length} / 15 Contacts Configured</span>
          </div>
        </div>

        {/* Contacts Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Loader2 size={36} className="spin-icon" style={{ color: '#f43f5e', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--text-muted)' }}>Loading your trusted circle...</p>
          </div>
        ) : filteredContacts.length > 0 ? (
          <div className="grid-3 contacts-grid">
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact._id}
                contact={contact}
                onEdit={handleOpenEdit}
                onDelete={handleDeleteContact}
                userEmergencyMessage={user?.emergencyInfo?.emergencyMessage}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Users className="empty-state-icon" />
            <h3>No Trusted Contacts Found</h3>
            <p style={{ maxWidth: '440px', margin: '0.5rem auto 1.5rem', color: 'var(--text-muted)' }}>
              {searchTerm
                ? `No contacts matching "${searchTerm}". Try a different search term.`
                : 'You have not added any trusted contacts yet. Add family members, trusted colleagues, or friends to ensure immediate emergency notifications.'}
            </p>
            {!searchTerm && (
              <button onClick={handleOpenAdd} className="btn btn-primary">
                <UserPlus size={16} />
                <span>Add Your First Emergency Contact</span>
              </button>
            )}
          </div>
        )}

        {/* Guidance Card */}
        <div className="safety-advice-card glass-card" style={{ marginTop: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fbbf24', marginBottom: '0.5rem' }}>
            <ShieldCheck size={20} />
            <strong style={{ fontSize: '1rem' }}>Best Practices for Your Emergency Circle:</strong>
          </div>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
            <li>Designate at least one <strong>Primary Contact</strong> who is readily reachable 24/7.</li>
            <li>Ensure phone numbers include full country code (e.g., +91 for India).</li>
            <li>Inform your chosen contacts so they are aware of incoming Aegis alert messages.</li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveContact}
        contact={editingContact}
      />

      <style>{`
        .contacts-page {
          padding-bottom: 3rem;
        }
        .contacts-header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-info {
          max-width: 650px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .header-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-info p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .contacts-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .search-box {
          position: relative;
          flex: 1;
          max-width: 450px;
          min-width: 260px;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .search-input {
          padding-left: 2.75rem;
        }
        .circle-stats-badge {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }
        .contacts-grid {
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default TrustedContactsPage;
