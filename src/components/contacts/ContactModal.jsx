import React, { useState, useEffect } from 'react';
import { X, UserPlus, Save, AlertCircle } from 'lucide-react';

const relationships = [
  'Family',
  'Parent',
  'Sibling',
  'Spouse / Partner',
  'Friend',
  'Colleague',
  'Neighbor',
  'Other'
];

const ContactModal = ({ isOpen, onClose, onSave, contact = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    relationship: 'Family',
    isPrimary: false
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name || '',
        phone: contact.phone || '',
        email: contact.email || '',
        relationship: contact.relationship || 'Family',
        isPrimary: Boolean(contact.isPrimary)
      });
    } else {
      setFormData({
        name: '',
        phone: '',
        email: '',
        relationship: 'Family',
        isPrimary: false
      });
    }
    setError('');
  }, [contact, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Contact name is required.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required.');
      return;
    }

    setSubmitting(true);
    try {
      await onSave(formData);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to save contact.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
            <UserPlus size={20} color="#f43f5e" />
            <span>{contact ? 'Edit Trusted Contact' : 'Add Trusted Contact'}</span>
          </h3>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label form-label-required">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Sister, Mom, Best Friend"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Phone Number (with country code)</label>
              <input
                type="tel"
                className="form-control"
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <div className="form-hint">Used for 1-tap emergency calling and WhatsApp SOS broadcasts</div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address (Optional)</label>
              <input
                type="email"
                className="form-control"
                placeholder="e.g. contact@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Relationship</label>
              <select
                className="form-control"
                value={formData.relationship}
                onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
              >
                {relationships.map((rel) => (
                  <option key={rel} value={rel} style={{ background: '#111827' }}>
                    {rel}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ marginTop: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={formData.isPrimary}
                  onChange={(e) => setFormData({ ...formData, isPrimary: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#f43f5e' }}
                />
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Mark as Primary Emergency Contact
                </span>
              </label>
              <div className="form-hint" style={{ marginLeft: '26px' }}>
                Primary contact is prioritized first during emergency dispatches.
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary btn-sm" disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>
              <Save size={16} />
              <span>{submitting ? 'Saving...' : 'Save Contact'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
