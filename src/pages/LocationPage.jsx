import React, { useState, useEffect } from 'react';
import LeafletMap from '../components/map/LeafletMap';
import { getCurrentCoordinates, reverseGeocodeCoordinates, getGoogleMapsLink } from '../utils/geolocation';
import { useToast } from '../context/ToastContext';
import {
  MapPin,
  Navigation,
  Share2,
  Copy,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Building,
  Hospital,
  Shield,
  Loader2,
  Radio,
  Layers
} from 'lucide-react';

const mockSafeZones = [
  {
    id: 1,
    title: 'Connaught Place Central Police Station',
    category: 'Safe Zone',
    severity: 'Low',
    lat: 28.6328,
    lng: 77.2197,
    address: 'Near Radial Road 4, Connaught Place'
  },
  {
    id: 2,
    title: 'Women Safety 24/7 Help Desk - Metro Gate 1',
    category: 'Safe Zone',
    severity: 'Low',
    lat: 28.6180,
    lng: 77.2050,
    address: 'Central Secretariat Metro Station'
  },
  {
    id: 3,
    title: 'City General Hospital (24/7 Emergency Wing)',
    category: 'Medical',
    severity: 'Low',
    lat: 28.6250,
    lng: 77.2300,
    address: 'Hospital Road, Sector 3'
  }
];

const LocationPage = () => {
  const toast = useToast();
  const [userLocation, setUserLocation] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSafeZones, setShowSafeZones] = useState(true);
  const [liveWatchActive, setLiveWatchActive] = useState(false);

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = async () => {
    setLoading(true);
    try {
      const coords = await getCurrentCoordinates();
      const address = await reverseGeocodeCoordinates(coords.lat, coords.lng);
      setUserLocation({
        lat: coords.lat,
        lng: coords.lng,
        address
      });
      setAccuracy(coords.accuracy);
      toast.success('Live GPS coordinates acquired successfully.');
    } catch (err) {
      toast.error(err.message || 'Unable to retrieve location.');
      // Fallback center
      setUserLocation({
        lat: 28.6139,
        lng: 77.2090,
        address: 'Default Map Center (New Delhi, India)'
      });
    } finally {
      setLoading(false);
    }
  };

  const copyShareLink = () => {
    if (!userLocation) return;
    const url = getGoogleMapsLink(userLocation.lat, userLocation.lng);
    navigator.clipboard.writeText(`My current live location: ${url} (${userLocation.address})`);
    toast.success('Live location map link copied to clipboard!');
  };

  const shareViaWhatsApp = () => {
    if (!userLocation) return;
    const url = getGoogleMapsLink(userLocation.lat, userLocation.lng);
    const text = encodeURIComponent(
      `📍 Here is my current live GPS location:\n${url}\nAddress: ${userLocation.address}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="location-page">
      <div className="container">
        {/* Header Strip */}
        <div className="location-header glass-card">
          <div className="header-text">
            <div className="location-live-badge">
              <Radio size={15} className="radio-pulse" />
              <span>Real-Time Geolocation Tracking</span>
            </div>
            <h1>Live GPS Location & Safe Zones</h1>
            <p>
              Interactive high-precision OpenStreetMap showing your real-time position, accuracy radius, and nearest verified emergency safe stations.
            </p>
          </div>

          <div className="location-actions">
            <button
              onClick={fetchCurrentLocation}
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? <Loader2 size={16} className="spin-icon" /> : <Navigation size={16} />}
              <span>{loading ? 'Locating...' : 'Refresh My GPS'}</span>
            </button>
            <button
              onClick={() => setShowSafeZones(!showSafeZones)}
              className={`btn ${showSafeZones ? 'btn-secondary' : 'btn-secondary'}`}
            >
              <Layers size={16} />
              <span>{showSafeZones ? 'Hide Safe Zones' : 'Show Safe Zones'}</span>
            </button>
          </div>
        </div>

        {/* Map & Details Grid */}
        <div className="location-main-grid">
          {/* Map Column */}
          <div className="map-view-container glass-card">
            <div className="map-card-header">
              <div className="map-status-row">
                <span className="live-status-pill">
                  <span className="dot-green"></span> GPS Active
                </span>
                {accuracy && (
                  <span className="accuracy-pill">
                    Accuracy: ±{Math.round(accuracy)}m
                  </span>
                )}
              </div>
              <div className="map-legend">
                <span className="legend-item"><span className="legend-dot user-dot"></span> You</span>
                {showSafeZones && (
                  <span className="legend-item"><span className="legend-dot safe-dot"></span> Safe Stations</span>
                )}
              </div>
            </div>

            <div className="map-wrapper-box">
              <LeafletMap
                userLocation={userLocation}
                accuracy={accuracy}
                markers={showSafeZones ? mockSafeZones : []}
                height="500px"
              />
            </div>
          </div>

          {/* Details & Sharing Sidebar */}
          <div className="location-sidebar">
            {/* Address Card */}
            <div className="glass-card address-card">
              <div className="card-title-row">
                <MapPin size={20} color="#f43f5e" />
                <h3>Your Current Address</h3>
              </div>
              <div className="address-display">
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                    <Loader2 size={16} className="spin-icon" /> Resolving street address...
                  </div>
                ) : (
                  <p className="resolved-address">{userLocation?.address || 'Address pending...'}</p>
                )}
              </div>

              {userLocation && (
                <div className="coords-tags">
                  <div className="coord-tag">
                    <span>Latitude:</span> <strong>{userLocation.lat.toFixed(6)}</strong>
                  </div>
                  <div className="coord-tag">
                    <span>Longitude:</span> <strong>{userLocation.lng.toFixed(6)}</strong>
                  </div>
                </div>
              )}

              <div className="share-buttons-stack">
                <button onClick={shareViaWhatsApp} className="btn broadcast-btn whatsapp-btn btn-block">
                  <MessageSquare size={16} />
                  <span>Share via WhatsApp</span>
                </button>
                <button onClick={copyShareLink} className="btn btn-secondary btn-block">
                  <Copy size={16} />
                  <span>Copy Location Link</span>
                </button>
                {userLocation && (
                  <a
                    href={getGoogleMapsLink(userLocation.lat, userLocation.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-block"
                  >
                    <ExternalLink size={16} />
                    <span>Open in Google Maps</span>
                  </a>
                )}
              </div>
            </div>

            {/* Safe Stations List */}
            <div className="glass-card safe-stations-card">
              <div className="card-title-row">
                <ShieldCheck size={20} color="#34d399" />
                <h3>Nearby Safe Zones</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Verified 24/7 security assistance checkpoints & medical bays:
              </p>

              <div className="safe-stations-list">
                {mockSafeZones.map((zone) => (
                  <div key={zone.id} className="safe-station-item">
                    <div className="station-icon">
                      {zone.category === 'Medical' ? <Hospital size={16} color="#10b981" /> : <Shield size={16} color="#6366f1" />}
                    </div>
                    <div className="station-info">
                      <strong>{zone.title}</strong>
                      <span>📍 {zone.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-page {
          padding-bottom: 3rem;
        }
        .location-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-text {
          max-width: 680px;
        }
        .location-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .header-text h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-text p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .location-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .location-main-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 1.75rem;
        }
        .map-view-container {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .map-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .map-status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .live-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }
        .accuracy-pill {
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .map-legend {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .user-dot { background: #f43f5e; box-shadow: 0 0 6px #f43f5e; }
        .safe-dot { background: #10b981; box-shadow: 0 0 6px #10b981; }
        .map-wrapper-box {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .location-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .address-card, .safe-stations-card {
          padding: 1.5rem;
        }
        .card-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .card-title-row h3 {
          font-size: 1.15rem;
        }
        .address-display {
          background: rgba(15, 23, 42, 0.7);
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          margin-bottom: 1rem;
        }
        .resolved-address {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
          font-weight: 500;
        }
        .coords-tags {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .coord-tag {
          background: rgba(255, 255, 255, 0.04);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }
        .coord-tag strong {
          display: block;
          color: var(--text-primary);
          font-family: monospace;
          font-size: 0.85rem;
          margin-top: 2px;
        }
        .share-buttons-stack {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .safe-stations-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .safe-station-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(15, 23, 42, 0.5);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .station-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .station-info {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
        }
        .station-info strong {
          color: var(--text-primary);
        }
        .station-info span {
          color: var(--text-muted);
          font-size: 0.78rem;
          margin-top: 2px;
        }
        @media (max-width: 992px) {
          .location-main-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default LocationPage;
