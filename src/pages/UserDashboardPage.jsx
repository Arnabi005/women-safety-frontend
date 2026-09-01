import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getContacts } from '../services/contactService';
import { getMyReports } from '../services/reportService';
import { getCurrentCoordinates, reverseGeocodeCoordinates } from '../utils/geolocation';
import SOSButton from '../components/emergency/SOSButton';
import QuickDialBar from '../components/emergency/QuickDialBar';
import ReportStatusBadge from '../components/reports/ReportStatusBadge';
import { formatDate } from '../utils/formatters';
import {
  LayoutDashboard,
  ShieldAlert,
  Users,
  MapPin,
  FileText,
  FilePlus,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  UserCheck,
  Phone,
  MessageSquare,
  Sparkles,
  Shield,
  Navigation,
  Loader2
} from 'lucide-react';

const UserDashboardPage = () => {
  const { user } = useAuth();

  const [contacts, setContacts] = useState([]);
  const [reports, setReports] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [contactsRes, reportsRes] = await Promise.allSettled([
        getContacts(),
        getMyReports()
      ]);

      if (contactsRes.status === 'fulfilled' && contactsRes.value.success) {
        setContacts(contactsRes.value.contacts || []);
      }
      if (reportsRes.status === 'fulfilled' && reportsRes.value.success) {
        setReports(reportsRes.value.reports || []);
      }

      // Try fetching quick location
      fetchGPS();
    } catch (e) {
      console.warn('Dashboard load err:', e);
    } finally {
      setLoading(false);
    }
  };

  const fetchGPS = async () => {
    setLocating(true);
    try {
      const coords = await getCurrentCoordinates();
      const address = await reverseGeocodeCoordinates(coords.lat, coords.lng);
      setLocation({
        lat: coords.lat,
        lng: coords.lng,
        address
      });
    } catch (err) {
      console.warn('Dashboard GPS fetch failed:', err.message);
    } finally {
      setLocating(false);
    }
  };

  // Calculate safety readiness score
  const hasContacts = contacts.length > 0;
  const hasPrimary = contacts.some((c) => c.isPrimary);
  const hasMedical = Boolean(user?.emergencyInfo?.bloodGroup || user?.emergencyInfo?.medicalNotes);
  const hasPhone = Boolean(user?.phone);

  const checklistItems = [
    { label: 'Mobile phone number verified', done: hasPhone },
    { label: 'Added at least one trusted emergency contact', done: hasContacts },
    { label: 'Designated primary emergency responder', done: hasPrimary },
    { label: 'Emergency medical profile completed', done: hasMedical }
  ];

  const completedCount = checklistItems.filter((i) => i.done).length;
  const safetyScore = Math.round((completedCount / checklistItems.length) * 100);

  const primaryContact = contacts.find((c) => c.isPrimary) || contacts[0];

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Welcome Header */}
        <div className="dashboard-hero glass-card">
          <div className="hero-greeting">
            <div className="hero-badge">
              <Shield size={16} color="#f43f5e" />
              <span>Aegis Command Center</span>
            </div>
            <h1>Welcome back, {user?.name?.split(' ')[0]} 👋</h1>
            <p>Your real-time emergency safety protection is currently active and monitoring.</p>
          </div>

          <div className="dashboard-hero-cta">
            <Link to="/emergency" className="btn btn-primary btn-lg">
              <ShieldAlert size={18} />
              <span>Emergency Center</span>
            </Link>
          </div>
        </div>

        {/* Top 4 KPI Metrics Row */}
        <div className="grid-4 kpi-grid">
          {/* KPI 1: Safety Score */}
          <div className="glass-card kpi-card">
            <div className="kpi-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
              <Sparkles size={22} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Safety Readiness</span>
              <div className="kpi-value" style={{ color: safetyScore >= 75 ? '#34d399' : '#fbbf24' }}>
                {safetyScore}%
              </div>
              <span className="kpi-sub">{completedCount}/4 Safety checkpoints done</span>
            </div>
          </div>

          {/* KPI 2: Trusted Circle */}
          <div className="glass-card kpi-card">
            <div className="kpi-icon-wrap" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
              <Users size={22} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Emergency Circle</span>
              <div className="kpi-value">{contacts.length}</div>
              <span className="kpi-sub">{primaryContact ? `Primary: ${primaryContact.name.split(' ')[0]}` : 'No primary set'}</span>
            </div>
          </div>

          {/* KPI 3: Incident Reports */}
          <div className="glass-card kpi-card">
            <div className="kpi-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
              <FileText size={22} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">My Reports</span>
              <div className="kpi-value">{reports.length}</div>
              <span className="kpi-sub">
                {reports.filter((r) => r.status === 'Resolved').length} Resolved by moderators
              </span>
            </div>
          </div>

          {/* KPI 4: Live Location */}
          <div className="glass-card kpi-card">
            <div className="kpi-icon-wrap" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}>
              <MapPin size={22} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Live GPS Status</span>
              <div className="kpi-value" style={{ fontSize: '1.25rem', marginTop: '4px' }}>
                {location ? 'Connected' : 'Offline'}
              </div>
              <span className="kpi-sub truncate-text" style={{ maxWidth: '140px' }}>
                {location ? location.address : 'Click to fetch'}
              </span>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick SOS & Safety Checklist */}
        <div className="dashboard-middle-grid">
          {/* Quick SOS Box */}
          <div className="glass-card sos-dashboard-widget">
            <div className="widget-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldAlert size={20} color="#f43f5e" />
                <h3 style={{ fontSize: '1.2rem' }}>Instant Distress Dispatch</h3>
              </div>
              <Link to="/emergency" className="widget-link">
                Full SOS Center <ArrowRight size={14} />
              </Link>
            </div>

            <SOSButton size="medium" />

            <div className="quick-dispatch-actions">
              {primaryContact ? (
                <div className="primary-contact-box">
                  <div className="contact-box-left">
                    <UserCheck size={18} color="#fbbf24" />
                    <div>
                      <strong>Primary: {primaryContact.name}</strong>
                      <span>{primaryContact.phone}</span>
                    </div>
                  </div>
                  <a href={`tel:${primaryContact.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-primary btn-sm">
                    <Phone size={14} /> Quick Call
                  </a>
                </div>
              ) : (
                <div className="no-primary-banner">
                  <span>No primary contact configured yet.</span>
                  <Link to="/contacts" className="btn btn-secondary btn-sm">
                    Add Contact
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Safety Readiness Checklist */}
          <div className="glass-card checklist-widget">
            <div className="widget-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} color="#10b981" />
                <h3 style={{ fontSize: '1.2rem' }}>Safety Readiness Checklist</h3>
              </div>
              <span className="score-pill" style={{ background: safetyScore === 100 ? '#10b98120' : '#f59e0b20', color: safetyScore === 100 ? '#34d399' : '#fbbf24' }}>
                {safetyScore}% Complete
              </span>
            </div>

            <div className="checklist-items-stack">
              {checklistItems.map((item, idx) => (
                <div key={idx} className={`checklist-row ${item.done ? 'done' : 'pending'}`}>
                  {item.done ? (
                    <CheckCircle2 size={18} color="#10b981" className="chk-icon" />
                  ) : (
                    <AlertCircle size={18} color="#f59e0b" className="chk-icon" />
                  )}
                  <span className="chk-label">{item.label}</span>
                  {!item.done && (
                    <Link to={idx <= 2 ? '/contacts' : '/profile'} className="chk-fix-btn">
                      Fix now
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="widget-bottom-tip">
              💡 <em>Keeping your trusted circle and medical notes up to date increases emergency dispatch efficiency by 70%.</em>
            </div>
          </div>
        </div>

        {/* Recent Reports Summary */}
        <div className="dashboard-reports-section glass-card" style={{ marginTop: '2rem' }}>
          <div className="widget-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color="#818cf8" />
              <h3 style={{ fontSize: '1.2rem' }}>My Recent Incident Reports</h3>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/report" className="btn btn-primary btn-sm">
                <FilePlus size={15} /> New Report
              </Link>
              <Link to="/my-reports" className="btn btn-secondary btn-sm">
                View All
              </Link>
            </div>
          </div>

          {reports.length > 0 ? (
            <div className="dashboard-reports-table">
              {reports.slice(0, 4).map((r) => (
                <div key={r._id} className="report-row-item">
                  <div className="report-row-left">
                    <strong>{r.title}</strong>
                    <span>{r.category} • {formatDate(r.createdAt)}</span>
                  </div>
                  <div className="report-row-right">
                    <ReportStatusBadge status={r.status} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state-mini">
              <p>No safety reports filed yet. If you witness or experience hazards, report them immediately.</p>
              <Link to="/report" className="btn btn-secondary btn-sm" style={{ marginTop: '0.5rem' }}>
                Report an Issue
              </Link>
            </div>
          )}
        </div>

        {/* Quick Helplines */}
        <QuickDialBar />
      </div>

      <style>{`
        .dashboard-page {
          padding-bottom: 3rem;
        }
        .dashboard-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2.25rem;
          margin-bottom: 2rem;
        }
        .hero-greeting {
          max-width: 650px;
        }
        .hero-badge {
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
        .hero-greeting h1 {
          font-size: 2rem;
          margin-bottom: 0.35rem;
        }
        .hero-greeting p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .kpi-grid {
          margin-bottom: 2rem;
        }
        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .kpi-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .kpi-info {
          display: flex;
          flex-direction: column;
        }
        .kpi-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }
        .kpi-value {
          font-family: var(--font-heading);
          font-size: 1.7rem;
          font-weight: 800;
          line-height: 1.15;
          margin: 2px 0;
        }
        .kpi-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .dashboard-middle-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 1.75rem;
        }
        .sos-dashboard-widget, .checklist-widget {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }
        .widget-link {
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        .score-pill {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }
        .quick-dispatch-actions {
          margin-top: auto;
        }
        .primary-contact-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(15, 23, 42, 0.7);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .contact-box-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .contact-box-left strong {
          display: block;
          font-size: 0.9rem;
          color: var(--text-primary);
        }
        .contact-box-left span {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .no-primary-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: #fbbf24;
        }
        .checklist-items-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .checklist-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.75rem;
          background: rgba(15, 23, 42, 0.5);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.88rem;
        }
        .chk-label {
          flex: 1;
          color: var(--text-primary);
        }
        .chk-fix-btn {
          font-size: 0.78rem;
          color: #f43f5e;
          font-weight: 700;
          text-decoration: underline;
        }
        .widget-bottom-tip {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.4;
        }
        .dashboard-reports-section {
          padding: 1.75rem;
        }
        .dashboard-reports-table {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .report-row-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .report-row-left {
          display: flex;
          flex-direction: column;
        }
        .report-row-left strong {
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .report-row-left span {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-top: 2px;
        }
        .empty-state-mini {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 900px) {
          .dashboard-middle-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default UserDashboardPage;
