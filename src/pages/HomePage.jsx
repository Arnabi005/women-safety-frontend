import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SOSButton from '../components/emergency/SOSButton';
import QuickDialBar from '../components/emergency/QuickDialBar';
import {
  ShieldAlert,
  MapPin,
  Users,
  FilePlus,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Bell,
  Lock,
  HeartHandshake
} from 'lucide-react';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();
  const [sosActivatedData, setSosActivatedData] = useState(null);

  const handleSOSTrigger = (data) => {
    setSosActivatedData(data);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Next-Generation Women Safety Network</span>
            </div>
            <h1 className="hero-title">
              Your Personal <span className="gradient-text">Guardian & Emergency</span> Safety Portal
            </h1>
            <p className="hero-subtitle">
              Instant one-tap SOS alerts, live GPS location sharing with trusted contacts, community safety hazard reporting, and 24/7 direct police & helpline dispatch.
            </p>

            <div className="hero-cta-group">
              <Link to="/emergency" className="btn btn-primary btn-lg">
                <ShieldAlert size={20} />
                <span>Open Emergency SOS</span>
              </Link>
              <Link to={isAuthenticated ? '/dashboard' : '/register'} className="btn btn-secondary btn-lg">
                <span>{isAuthenticated ? 'Go to Dashboard' : 'Get Started Free'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="trust-metrics-row">
              <div className="metric-item">
                <div className="metric-value">24/7</div>
                <div className="metric-label">Emergency Helplines</div>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <div className="metric-value">&lt; 3s</div>
                <div className="metric-label">Instant SOS Dispatch</div>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <div className="metric-value">100%</div>
                <div className="metric-label">Encrypted & Private</div>
              </div>
            </div>
          </div>

          {/* Quick SOS Trigger Card */}
          <div className="hero-sos-card glass-card glass-card-glow">
            <div className="sos-card-header">
              <div className="sos-header-tag">
                <Bell size={16} color="#f43f5e" />
                <span>Instant Distress Signal</span>
              </div>
              <h3 className="sos-card-title">Tap SOS to Trigger Alarm</h3>
              <p className="sos-card-desc">
                Activates a loud siren alarm and pinpoints your live GPS coordinates immediately.
              </p>
            </div>

            <SOSButton onTriggerSOS={handleSOSTrigger} />

            {sosActivatedData && (
              <div className="sos-alert-box">
                <div className="sos-alert-title">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>SOS Signal Live</span>
                </div>
                <div className="sos-alert-address">
                  📍 {sosActivatedData.address}
                </div>
                <div className="sos-alert-actions">
                  <Link to="/emergency" className="btn btn-primary btn-sm btn-block">
                    View Emergency Broadcast Options
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="features-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Comprehensive Safety Suite</h2>
            <p className="section-subheading">
              Engineered with advanced security protocols and accessible tools to keep you safe everywhere you go.
            </p>
          </div>

          <div className="grid-3 features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}>
                <ShieldAlert size={26} />
              </div>
              <h3>1-Tap SOS & Siren</h3>
              <p>
                Trigger a piercing siren to disorient perpetrators, while simultaneously calculating GPS coordinates and preparing WhatsApp/SMS broadcasts.
              </p>
              <Link to="/emergency" className="feature-link">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                <MapPin size={26} />
              </div>
              <h3>Live GPS Map Tracking</h3>
              <p>
                Real-time geolocation tracking on OpenStreetMap with reverse geocoding to resolve your precise street address and shareable map links.
              </p>
              <Link to="/location" className="feature-link">
                View live map <ArrowRight size={14} />
              </Link>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <Users size={26} />
              </div>
              <h3>Trusted Contacts Circle</h3>
              <p>
                Maintain an emergency network of family and friends with instant WhatsApp distress dispatches and 1-tap direct calling capability.
              </p>
              <Link to="/contacts" className="feature-link">
                Manage contacts <ArrowRight size={14} />
              </Link>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                <FilePlus size={26} />
              </div>
              <h3>Incident & Hazard Reporting</h3>
              <p>
                Report harassment, unlit streets, and unsafe transit with interactive map coordinate pinning, photographic evidence, and anonymous options.
              </p>
              <Link to="/report" className="feature-link">
                File a report <ArrowRight size={14} />
              </Link>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <BookOpen size={26} />
              </div>
              <h3>Safety Guides & Rights</h3>
              <p>
                Curated safety strategies for night travel, public commute, cyber stalking, self-defense tactics, and legal protections.
              </p>
              <Link to="/safety-tips" className="feature-link">
                Read tips <ArrowRight size={14} />
              </Link>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
                <Lock size={26} />
              </div>
              <h3>Moderated Oversight</h3>
              <p>
                Safety reports are tracked through an administrative lifecycle (Pending, Reviewing, Resolved) to ensure action from local authorities.
              </p>
              <Link to="/my-reports" className="feature-link">
                Track issues <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Helplines Section */}
      <section className="hotlines-home-section">
        <div className="container">
          <QuickDialBar />
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card glass-card glass-card-glow">
            <div className="cta-content">
              <h2>Empower Your Personal Safety Today</h2>
              <p>Create your free account to configure your emergency contacts circle and customized distress dispatches.</p>
            </div>
            <div className="cta-action">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                  Open Command Dashboard
                </Link>
              ) : (
                <Link to="/register" className="btn btn-primary btn-lg">
                  Sign Up for Free Protection
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding: 3rem 0 4rem;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 3rem;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: #fda4af;
          margin-bottom: 1.25rem;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f43f5e;
        }
        .hero-title {
          font-size: 2.75rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 580px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .trust-metrics-row {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        .metric-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .metric-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .metric-divider {
          width: 1px;
          height: 35px;
          background: var(--border-color);
        }
        .hero-sos-card {
          padding: 2rem;
          text-align: center;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.85);
        }
        .sos-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: #f43f5e;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .sos-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.35rem;
        }
        .sos-card-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .sos-alert-box {
          margin-top: 1.25rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          padding: 1rem;
          text-align: left;
        }
        .sos-alert-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 700;
          color: #34d399;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }
        .sos-alert-address {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .features-section {
          padding: 4rem 0;
        }
        .section-header-center {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 3rem;
        }
        .section-heading {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .section-subheading {
          font-size: 0.98rem;
          color: var(--text-muted);
        }
        .features-grid {
          gap: 1.5rem;
        }
        .feature-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .feature-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .feature-card h3 {
          font-size: 1.2rem;
        }
        .feature-card p {
          font-size: 0.9rem;
          line-height: 1.55;
          flex: 1;
        }
        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }
        .hotlines-home-section {
          padding: 1rem 0;
        }
        .cta-banner-section {
          padding: 3rem 0;
        }
        .cta-banner-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(17, 24, 39, 0.95) 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }
        .cta-content h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .cta-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 500px;
        }
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtitle {
            margin: 0 auto 2rem;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .trust-metrics-row {
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .hero-title {
            font-size: 2rem;
          }
          .trust-metrics-row {
            flex-direction: column;
            gap: 1rem;
          }
          .metric-divider {
            display: none;
          }
          .cta-banner-card {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
