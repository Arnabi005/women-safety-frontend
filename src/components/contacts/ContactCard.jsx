import React from 'react';
import { Phone, MessageSquare, Star, Edit2, Trash2, Mail, UserCheck } from 'lucide-react';

const ContactCard = ({ contact, onEdit, onDelete, onSendSOSMessage, userEmergencyMessage }) => {
  const cleanPhone = contact.phone.replace(/[^0-9+]/g, '');

  const handleWhatsAppAlert = () => {
    const text = encodeURIComponent(
      `${userEmergencyMessage || 'EMERGENCY ALERT: I am in distress and need your immediate help!'}`
    );
    window.open(`https://wa.me/${cleanPhone.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className={`contact-card glass-card ${contact.isPrimary ? 'primary-highlight' : ''}`}>
      <div className="contact-card-header">
        <div className="contact-info">
          <div className="contact-name-row">
            <h4 className="contact-name">{contact.name}</h4>
            {contact.isPrimary && (
              <span className="primary-pill" title="Primary emergency contact">
                <Star size={12} fill="#fbbf24" color="#fbbf24" /> Primary
              </span>
            )}
          </div>
          <span className="contact-relation-badge">{contact.relationship}</span>
        </div>
        
        <div className="contact-actions-quick">
          <button
            onClick={() => onEdit(contact)}
            className="action-icon-btn edit-btn"
            title="Edit Contact"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(contact._id)}
            className="action-icon-btn delete-btn"
            title="Delete Contact"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="contact-details-list">
        <div className="contact-detail-item">
          <Phone size={15} color="#fda4af" />
          <a href={`tel:${cleanPhone}`} className="detail-value-link">
            {contact.phone}
          </a>
        </div>
        {contact.email && (
          <div className="contact-detail-item">
            <Mail size={15} color="#94a3b8" />
            <a href={`mailto:${contact.email}`} className="detail-value-link text-dim">
              {contact.email}
            </a>
          </div>
        )}
      </div>

      <div className="contact-cta-row">
        <a href={`tel:${cleanPhone}`} className="btn btn-secondary btn-sm contact-cta-btn">
          <Phone size={14} /> Call
        </a>
        <button
          type="button"
          onClick={handleWhatsAppAlert}
          className="btn btn-sm whatsapp-alert-btn"
        >
          <MessageSquare size={14} /> Alert via WhatsApp
        </button>
      </div>

      <style>{`
        .contact-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .contact-card.primary-highlight {
          border-color: rgba(245, 158, 11, 0.4);
          background: rgba(30, 27, 75, 0.35);
        }
        .contact-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .contact-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .contact-name {
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .primary-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.4);
        }
        .contact-relation-badge {
          display: inline-block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .contact-actions-quick {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .action-icon-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .action-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }
        .action-icon-btn.delete-btn:hover {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.1);
        }
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
        }
        .detail-value-link {
          color: var(--text-primary);
          font-weight: 500;
        }
        .detail-value-link.text-dim {
          color: var(--text-muted);
          font-weight: 400;
          font-size: 0.85rem;
        }
        .contact-cta-row {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }
        .contact-cta-btn {
          flex: 1;
        }
        .whatsapp-alert-btn {
          flex: 1.5;
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.3);
          font-weight: 600;
        }
        .whatsapp-alert-btn:hover {
          background: #25d366;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ContactCard;
