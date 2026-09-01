import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getContacts } from '../services/contactService';
import SOSButton from '../components/emergency/SOSButton';
import QuickDialBar from '../components/emergency/QuickDialBar';
import { getCurrentCoordinates, reverseGeocodeCoordinates, getGoogleMapsLink } from '../utils/geolocation';
import { sirenPlayer } from '../utils/audio';
import {
  ShieldAlert,
  MapPin,
  Share2,
  Copy,
  MessageSquare,
  Phone,
  CheckCircle2,
  Users,
  Smartphone,
  Navigation,
  Volume2,
  VolumeX,
  Radio,
  Clock
} from 'lucide-react';

const EmergencyPage = () => {
  const { user, isAuthenticated } = useAuth();
  const toast = useToast();

  const [location, setLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [sirenActive, setSirenActive] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    user?.emergencyInfo?.emergencyMessage || 'EMERGENCY: I am in danger and require immediate assistance! Here is my live GPS location:'
  );

  // Fetch location on load
  useEffect(() => {
    fetchLocation();
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const check = setInterval(() => {
      setSirenActive(sirenPlayer.getStatus());
    }, 400);
    return () => clearInterval(check);
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await getContacts();
      if (res.success) {
        setContacts(res.contacts);
      }
    } catch (e) {
      console.warn('Could not fetch contacts for emergency page:', e.message);
    }
  };

  const fetchLocation = async () => {
    setLoadingLocation(true);
    try {
      const coords = await getCurrentCoordinates();
      const address = await reverseGeocodeCoordinates(coords.lat, coords.lng);
      setLocation({
        lat: coords.lat,
        lng: coords.lng,
        accuracy: coords.accuracy,
        address,
        mapsUrl: getGoogleMapsLink(coords.lat, coords.lng)
      });
    } catch (err) {
      console.warn('Location fetch issue:', err.message);
    } finally {
      setLoadingLocation(false);
    }
  };

  const handleSOSTriggered = (data) => {
    if (data.coords) {
      setLocation({
        lat: data.coords.lat,
        lng: data.coords.lng,
        accuracy: data.coords.accuracy,
        address: data.address,
        mapsUrl: data.mapsUrl
      });
    }
  };

  const getFullEmergencyMessage = () => {
    const locText = location?.mapsUrl
      ? `\n📍 Live Location: ${location.mapsUrl}\n📌 Address: ${location.address}`
      : '\n📍 Location tracking active.';
    const sender = user ? `\n- ${user.name} (${user.phone})` : '';
    const blood = user?.emergencyInfo?.bloodGroup ? `\n🩸 Blood Group: ${user.emergencyInfo.bloodGroup}` : '';
    return `${customMsg}${locText}${sender}${blood}`;
  };

  const copyEmergencyAlert = () => {
    const text = getFullEmergencyMessage();
    navigator.clipboard.writeText(text);
    toast.success('Emergency alert text & GPS link copied to clipboard!');
  };

  const broadcastAllWhatsApp = () => {
    const text = encodeURIComponent(getFullEmergencyMessage());
    if (contacts.length > 0) {
      const primary = contacts.find((c) => c.isPrimary) || contacts[0];
      const cleanPhone = primary.phone.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    } else {
      window.open(`https://wa.me/?text=${text}`, '_blank');
    }
  };

  const broadcastSMS = () => {
    const text = encodeURIComponent(getFullEmergencyMessage());
    if (contacts.length > 0) {
      const phones = contacts.map((c) => c.phone.replace(/[^0-9+]/g, '')).join(',');
      window.location.href = `sms:${phones}?body=${text}`;
    } else {
      window.location.href = `sms:?body=${text}`;
    }
  };

  return (
    <div className="emergency-page">
      <div className="container">
        {/* Top Emergency Hero Card */}
        <div className="emergency-hero glass-card glass-card-glow">
          <div className="hero-head">
            <div className="emergency-mode-tag">
              <Radio size={16} className="radio-pulse" />
              <span>LIVE EMERGENCY RESPONSE MODE</span>
            </div>
            <h1>Instant Distress Activation</h1>
            <p>
              Tap the SOS button to sound the piercing alarm siren and broadcast your coordinates to emergency responders & your trusted network.
            </p>
          </div>

          <SOSButton onTriggerSOS={handleSOSTriggered} />

          {/* Current GPS Coordinates Box */}
          <div className="gps-live-strip glass-card">
            <div className="gps-left">
              <MapPin size={22} color="#f43f5e" />
              <div>
                <div className="gps-title">Your Current GPS Coordinates:</div>
                <div className="gps-address">
                  {loadingLocation ? (
                    'Acquiring high-accuracy GPS coordinates...'
                  ) : location ? (
                    <>
                      <strong>{location.address}</strong>
                      <span className="gps-coords">
                        ({location.lat.toFixed(5)}, {location.lng.toFixed(5)})
                      </span>
                    </>
                  ) : (
                    'Location not yet acquired. Click below to fetch.'
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={fetchLocation}
              disabled={loadingLocation}
              className="btn btn-secondary btn-sm gps-refresh-btn"
            >
              <Navigation size={15} />
              <span>{loadingLocation ? 'Locating...' : 'Refresh GPS'}</span>
            </button>
          </div>

          {/* Broadcast Quick Dispatch Options */}
          <div className="broadcast-options-grid">
            <button
              onClick={broadcastAllWhatsApp}
              className="btn broadcast-btn whatsapp-btn"
            >
              <MessageSquare size={18} />
              <span>Broadcast via WhatsApp</span>
            </button>

            <button
              onClick={broadcastSMS}
              className="btn broadcast-btn sms-btn"
            >
              <Smartphone size={18} />
              <span>Send Emergency SMS</span>
            </button>

            <button
              onClick={copyEmergencyAlert}
              className="btn btn-secondary broadcast-btn"
            >
              <Copy size={18} />
              <span>Copy SOS Text & Map Link</span>
            </button>
          </div>
        </div>

        {/* Trusted Contacts Quick Dispatch Bar if Authenticated */}
        {isAuthenticated && contacts.length > 0 && (
          <div className="emergency-contacts-strip glass-card" style={{ marginTop: '2rem' }}>
            <div className="strip-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={20} color="#f43f5e" />
                <h3 style={{ fontSize: '1.15rem' }}>Your Trusted Emergency Circle ({contacts.length})</h3>
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                1-tap direct alert
              </span>
            </div>

            <div className="contacts-quick-list">
              {contacts.map((c) => {
                const clean = c.phone.replace(/[^0-9+]/g, '');
                return (
                  <div key={c._id} className="contact-quick-item glass-card">
                    <div className="contact-quick-info">
                      <strong>{c.name}</strong>
                      <span>{c.relationship} • {c.phone}</span>
                    </div>
                    <div className="contact-quick-btns">
                      <a href={`tel:${clean}`} className="btn btn-secondary btn-sm" title="Call Contact">
                        <Phone size={14} /> Call
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          const text = encodeURIComponent(getFullEmergencyMessage());
                          window.open(`https://wa.me/${clean.replace('+', '')}?text=${text}`, '_blank');
                        }}
                        className="btn btn-sm"
                        style={{ background: 'rgba(37, 211, 102, 0.2)', color: '#25d366', border: '1px solid rgba(37, 211, 102, 0.4)' }}
                        title="Alert via WhatsApp"
                      >
                        <MessageSquare size={14} /> WhatsApp
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Direct Helplines Section */}
        <QuickDialBar />
      </div>

      <style>{`
        .emergency-page {
          padding-bottom: 3rem;
        }
        .emergency-hero {
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          background: radial-gradient(circle at 50% 0%, rgba(244, 63, 94, 0.15) 0%, rgba(17, 24, 39, 0.95) 75%);
          border: 1px solid rgba(244, 63, 94, 0.35);
          text-align: center;
        }
        .hero-head {
          max-width: 650px;
          margin: 0 auto 1.5rem;
        }
        .emergency-mode-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: #f43f5e;
          letter-spacing: 0.1em;
          background: rgba(244, 63, 94, 0.15);
          border: 1px solid rgba(244, 63, 94, 0.35);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.85rem;
        }
        .radio-pulse {
          animation: pulse 1.2s infinite;
        }
        .hero-head h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        .hero-head p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .gps-live-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0 1.5rem;
          text-align: left;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-color);
        }
        .gps-left {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          flex: 1;
          min-width: 250px;
        }
        .gps-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          margin-bottom: 2px;
        }
        .gps-address {
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .gps-coords {
          display: block;
          font-size: 0.8rem;
          color: #fda4af;
          font-family: monospace;
          margin-top: 2px;
        }
        .broadcast-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .broadcast-btn {
          padding: 0.85rem 1.25rem;
          font-size: 0.95rem;
        }
        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #ffffff;
        }
        .whatsapp-btn:hover {
          background: linear-gradient(135deg, #34e77b 0%, #25d366 100%);
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.4);
        }
        .sms-btn {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
        }
        .emergency-contacts-strip {
          padding: 1.5rem;
        }
        .strip-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .contacts-quick-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .contact-quick-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          gap: 0.5rem;
        }
        .contact-quick-info {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
        }
        .contact-quick-info strong {
          color: var(--text-primary);
        }
        .contact-quick-info span {
          color: var(--text-muted);
          font-size: 0.78rem;
        }
        .contact-quick-btns {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        @media (max-width: 768px) {
          .emergency-hero { padding: 1.5rem 1rem; }
          .broadcast-options-grid { grid-template-columns: 1fr; }
          .gps-live-strip { flex-direction: column; }
          .gps-refresh-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default EmergencyPage;
