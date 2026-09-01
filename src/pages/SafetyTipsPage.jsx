import React, { useState } from 'react';
import {
  BookOpen,
  Moon,
  Bus,
  Shield,
  Smartphone,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Printer,
  ChevronRight,
  Phone
} from 'lucide-react';

const categories = [
  {
    id: 'night',
    title: 'Night Travel & Solo Commute',
    icon: Moon,
    color: '#818cf8',
    tips: [
      {
        title: 'Walk with Purpose & Confidence',
        desc: 'Keep your head high, maintain situational awareness, and avoid looking distracted on your phone or wearing noise-canceling headphones in isolated stretches.'
      },
      {
        title: 'Stay on Well-Lit Main Thoroughfares',
        desc: 'Even if a dark alleyway cuts 3 minutes off your commute, always choose populated, well-lit main roads covered by commercial CCTV cameras.'
      },
      {
        title: 'Share Live Route with Primary Contact',
        desc: 'Before beginning a late-night journey, trigger live location tracking or message your expected ETA to your trusted circle.'
      },
      {
        title: 'Keep Keys or Defender Accessible',
        desc: 'Have your keys, pepper spray, or emergency device in your coat pocket before reaching dark doorways or parking lots, rather than fumbling in a bag.'
      }
    ]
  },
  {
    id: 'transit',
    title: 'Public Transit & Cab Protocols',
    icon: Bus,
    color: '#f43f5e',
    tips: [
      {
        title: 'Verify Driver & Number Plate Before Boarding',
        desc: 'Never enter a ride-share vehicle before matching the car model, color, license plate, and driver photo with the official app.'
      },
      {
        title: 'Check Child Lock / Door Handles Inside',
        desc: 'Immediately upon entering a cab, test the door handle on your side to ensure the child lock has not been secretly engaged.'
      },
      {
        title: 'Make a Prominent Phone Call upon Entering',
        desc: 'Loudly state the cab registration number and your destination on a call so the driver knows your location is actively tracked.'
      },
      {
        title: 'Insist on Standard Route Navigation',
        desc: 'If a driver attempts an unverified shortcut into deserted alleys, speak up immediately and request to stay on the main GPS route.'
      }
    ]
  },
  {
    id: 'cyber',
    title: 'Cyber Privacy & Anti-Stalking',
    icon: Smartphone,
    color: '#06b6d4',
    tips: [
      {
        title: 'Disable Public Location Check-ins in Real-Time',
        desc: 'Avoid posting real-time stories or checking in at gym/work locations. Post photos after you have left the venue.'
      },
      {
        title: 'Audit App Background Location Permissions',
        desc: 'Review device settings and revoke background location access for social media and utility apps that do not require it.'
      },
      {
        title: 'Document Digital Harassment Immediately',
        desc: 'Take full-screen screenshots including timestamps, phone numbers, and profile URLs before blocking stalkers to preserve legal evidence.'
      },
      {
        title: 'Use Two-Factor Authentication (2FA)',
        desc: 'Protect your email, social accounts, and cloud storage with Authenticator apps rather than standard SMS codes.'
      }
    ]
  },
  {
    id: 'legal',
    title: 'Women Legal Rights & Protections',
    icon: Scale,
    color: '#fbbf24',
    tips: [
      {
        title: 'Right to Zero FIR',
        desc: 'A woman can file a "Zero FIR" at ANY police station regardless of jurisdiction where the incident occurred. Police cannot refuse to register it.'
      },
      {
        title: 'Right to Privacy during Statement Recording',
        desc: 'Under legal protection acts, a victim of harassment or sexual assault has the right to record statements before a female officer or magistrate in complete privacy.'
      },
      {
        title: 'Protection Against Sunset Arrests',
        desc: 'Women cannot be arrested between sunset (6:00 PM) and sunrise (6:00 AM) except in rare circumstances with special judicial magistrate permission.'
      },
      {
        title: 'Free Legal Aid & Support Cell',
        desc: 'Under the Legal Services Authorities Act, every woman is entitled to free legal aid and representation irrespective of income.'
      }
    ]
  }
];

const SafetyTipsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="safety-tips-page">
      <div className="container">
        {/* Header */}
        <div className="tips-header-wrapper glass-card">
          <div className="header-info">
            <div className="header-badge">
              <BookOpen size={16} color="#f43f5e" />
              <span>Safety Knowledge Base</span>
            </div>
            <h1>Actionable Safety Tips & Legal Rights</h1>
            <p>
              Essential situational awareness strategies, transit security protocols, cyber self-defense, and constitutional rights for women.
            </p>
          </div>

          <button onClick={handlePrint} className="btn btn-secondary btn-lg print-hide">
            <Printer size={18} />
            <span>Print Safety Guide</span>
          </button>
        </div>

        {/* Category Navigation Pills */}
        <div className="category-tabs-strip print-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  borderColor: isActive ? cat.color : undefined,
                  background: isActive ? `${cat.color}20` : undefined,
                  color: isActive ? '#ffffff' : undefined
                }}
              >
                <Icon size={18} color={cat.color} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tips Display */}
        <div className="tips-content-container">
          <div className="tips-category-header glass-card">
            <div className="cat-icon-lg" style={{ background: `${selectedCategory.color}20`, color: selectedCategory.color }}>
              <selectedCategory.icon size={28} />
            </div>
            <div>
              <h2>{selectedCategory.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Key security protocols and actionable measures to safeguard your personal space.
              </p>
            </div>
          </div>

          <div className="grid-2 tips-grid">
            {selectedCategory.tips.map((tip, idx) => (
              <div key={idx} className="tip-card glass-card">
                <div className="tip-card-head">
                  <div className="tip-number-badge">{idx + 1}</div>
                  <h3>{tip.title}</h3>
                </div>
                <p className="tip-body">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Quick Numbers Pocket Card */}
        <div className="pocket-guide-card glass-card" style={{ marginTop: '2.5rem' }}>
          <div className="guide-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#f43f5e' }}>
              <Shield size={22} />
              <h3 style={{ fontSize: '1.2rem' }}>Quick Pocket Helpline Reference</h3>
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Always memorize or bookmark these</span>
          </div>

          <div className="numbers-table-grid">
            <div className="num-box">
              <span className="num-code">112</span>
              <span className="num-label">All-in-One National Emergency (Police / Fire / Ambulance)</span>
            </div>
            <div className="num-box">
              <span className="num-code" style={{ color: '#ec4899' }}>1091</span>
              <span className="num-label">National Women Distress Helpline (24/7 Toll-free)</span>
            </div>
            <div className="num-box">
              <span className="num-code" style={{ color: '#8b5cf6' }}>181</span>
              <span className="num-label">Domestic Abuse & Crisis Intervention Cell</span>
            </div>
            <div className="num-box">
              <span className="num-code" style={{ color: '#06b6d4' }}>1930</span>
              <span className="num-label">National Cyber Crime Reporting Portal Hotline</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .safety-tips-page {
          padding-bottom: 3rem;
        }
        .tips-header-wrapper {
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
        .category-tabs-strip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .category-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .category-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }
        .tips-category-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .cat-icon-lg {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tips-category-header h2 {
          font-size: 1.35rem;
          margin-bottom: 0.2rem;
        }
        .tips-grid {
          gap: 1.5rem;
        }
        .tip-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .tip-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .tip-card-head {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .tip-number-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(244, 63, 94, 0.2);
          color: #fda4af;
          border: 1px solid rgba(244, 63, 94, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.82rem;
          flex-shrink: 0;
        }
        .tip-card-head h3 {
          font-size: 1.1rem;
          line-height: 1.35;
        }
        .tip-body {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .pocket-guide-card {
          padding: 1.75rem;
        }
        .guide-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .numbers-table-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
        .num-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .num-code {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #f43f5e;
        }
        .num-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        @media print {
          .print-hide { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default SafetyTipsPage;
