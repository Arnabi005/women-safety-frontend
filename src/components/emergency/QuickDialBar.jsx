import React from 'react';
import { Phone, Shield, ShieldAlert, HeartHandshake, Ambulance } from 'lucide-react';

const helplines = [
  {
    number: '112',
    name: 'National Emergency',
    sub: 'Police, Fire & Medical all-in-one',
    icon: ShieldAlert,
    color: '#f43f5e',
    badge: '24/7 Priority'
  },
  {
    number: '1091',
    name: 'Women Helpline',
    sub: 'Specialized 24x7 women distress cell',
    icon: Shield,
    color: '#ec4899',
    badge: 'Toll Free'
  },
  {
    number: '181',
    name: 'Women in Distress',
    sub: 'Domestic violence & crisis shelter',
    icon: HeartHandshake,
    color: '#8b5cf6',
    badge: 'Confidential'
  },
  {
    number: '102',
    name: 'Ambulance & Medical',
    sub: 'Immediate emergency medical transport',
    icon: Ambulance,
    color: '#10b981',
    badge: 'Medical'
  },
  {
    number: '1090',
    name: "Women Power Line",
    sub: 'Cyber stalking & eve teasing cell',
    icon: Phone,
    color: '#06b6d4',
    badge: 'Active'
  }
];

const QuickDialBar = () => {
  return (
    <div className="quick-dial-section">
      <div className="section-title-wrapper">
        <h3 className="section-title">
          <Phone size={20} color="#f43f5e" /> Direct Emergency Dispatch Hotlines
        </h3>
        <p className="section-desc">Tap any hotline card to initiate an immediate phone call from your device</p>
      </div>

      <div className="helpline-cards-grid">
        {helplines.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.number}
              href={`tel:${item.number}`}
              className="helpline-card glass-card"
              title={`Call ${item.name} (${item.number})`}
            >
              <div className="card-top">
                <div className="helpline-icon-wrap" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>
                  <Icon size={22} />
                </div>
                <span className="helpline-badge">{item.badge}</span>
              </div>
              <div className="helpline-number">{item.number}</div>
              <div className="helpline-name">{item.name}</div>
              <div className="helpline-sub">{item.sub}</div>
              <div className="call-now-btn">
                <Phone size={14} /> Call {item.number}
              </div>
            </a>
          );
        })}
      </div>

      <style>{`
        .quick-dial-section {
          margin: 2rem 0;
        }
        .section-title-wrapper {
          margin-bottom: 1.25rem;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .section-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        .helpline-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .helpline-card {
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          text-decoration: none;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .helpline-card:hover {
          transform: translateY(-3px);
          border-color: rgba(244, 63, 94, 0.4);
          box-shadow: var(--shadow-glow);
        }
        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .helpline-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .helpline-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
        }
        .helpline-number {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .helpline-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .helpline-sub {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.35;
          margin-bottom: 1rem;
          flex: 1;
        }
        .call-now-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.5rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }
        .helpline-card:hover .call-now-btn {
          background: var(--primary);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default QuickDialBar;
