import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Phone, ShieldCheck, Heart, MapPin, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Hotlines Banner */}
        <div className="hotlines-quick-strip glass-card">
          <div className="strip-title">
            <ShieldAlert size={20} color="#f43f5e" />
            <span>National Emergency Hotlines:</span>
          </div>
          <div className="strip-items">
            <a href="tel:112" className="hotline-pill">
              <Phone size={14} /> <strong>112</strong> All Emergency
            </a>
            <a href="tel:1091" className="hotline-pill highlight">
              <Phone size={14} /> <strong>1091</strong> Women Helpline
            </a>
            <a href="tel:100" className="hotline-pill">
              <Phone size={14} /> <strong>100</strong> Police Control
            </a>
            <a href="tel:181" className="hotline-pill">
              <Phone size={14} /> <strong>181</strong> Domestic Abuse
            </a>
          </div>
        </div>

        <div className="footer-grid">
          {/* Brand & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <ShieldAlert size={26} color="#f43f5e" />
              <span>AEGIS SAFETY</span>
            </div>
            <p className="footer-desc">
              Empowering women with instant emergency SOS broadcasting, live GPS coordinates tracking, trusted circle network, and community safety incident reporting.
            </p>
            <div className="safety-pledge">
              <Heart size={14} color="#f43f5e" /> Built with absolute privacy & security in mind
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul>
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/emergency">Emergency SOS & Siren</Link></li>
              <li><Link to="/location">Live Map & Geolocation</Link></li>
              <li><Link to="/contacts">Manage Trusted Contacts</Link></li>
              <li><Link to="/report">Report Safety Hazard</Link></li>
            </ul>
          </div>

          {/* Safety Knowledge */}
          <div className="footer-col">
            <h4>Resources & Rights</h4>
            <ul>
              <li><Link to="/safety-tips">Night Travel Guidelines</Link></li>
              <li><Link to="/safety-tips">Public Transit Protocol</Link></li>
              <li><Link to="/safety-tips">Cyber & Digital Safety</Link></li>
              <li><Link to="/safety-tips">Legal Protection Laws</Link></li>
              <li><Link to="/my-reports">Check Report Status</Link></li>
            </ul>
          </div>

          {/* Admin & Security */}
          <div className="footer-col">
            <h4>Administration</h4>
            <p className="footer-subtext">
              Authorized personnel and law enforcement moderators:
            </p>
            <Link to="/admin/login" className="btn btn-secondary btn-sm admin-portal-btn">
              <Lock size={14} /> Admin Staff Login
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aegis Women Safety Portal. All rights reserved.</p>
          <p className="footer-disclaimer">
            In immediate life-threatening situations, always dial <strong>112</strong> or your local emergency dispatch service directly.
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #080c14;
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 2rem;
          margin-top: auto;
        }
        .hotlines-quick-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 1.5rem;
          margin-bottom: 2.5rem;
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(244, 63, 94, 0.25);
        }
        .strip-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .strip-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .hotline-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          background: rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.85rem;
          transition: var(--transition-fast);
        }
        .hotline-pill:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
        }
        .hotline-pill.highlight {
          background: rgba(244, 63, 94, 0.18);
          border-color: rgba(244, 63, 94, 0.4);
          color: #fda4af;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 0.85rem;
        }
        .footer-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .safety-pledge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: #fda4af;
        }
        .footer-col h4 {
          font-size: 1rem;
          margin-bottom: 1.1rem;
          color: var(--text-primary);
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-col ul a {
          color: var(--text-muted);
          font-size: 0.88rem;
          transition: var(--transition-fast);
        }
        .footer-col ul a:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .footer-subtext {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }
        .admin-portal-btn {
          display: inline-flex;
          border-color: rgba(251, 191, 36, 0.3);
          color: #fbbf24;
        }
        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .footer-disclaimer strong {
          color: #f43f5e;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .brand-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .brand-col {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
