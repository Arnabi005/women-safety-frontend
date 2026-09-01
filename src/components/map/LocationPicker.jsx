import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { getCurrentCoordinates, reverseGeocodeCoordinates } from '../../utils/geolocation';
import { MapPin, Navigation, Loader2 } from 'lucide-react';

const pickerIcon = L.divIcon({
  className: 'custom-picker-pin',
  html: `
    <div style="
      width: 32px;
      height: 32px;
      background: #f43f5e;
      border: 3px solid #ffffff;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 12px rgba(244, 63, 94, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32]
});

// Map click handler component
const MapClickHandler = ({ onLocationSelected }) => {
  useMapEvents({
    click(e) {
      onLocationSelected(e.latlng.lat, e.latlng.lng);
    }
  });
  return null;
};

// Recenter component
const MapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1]) {
      map.setView(center, 15);
    }
  }, [center, map]);
  return null;
};

const LocationPicker = ({
  initialLat = 28.6139,
  initialLng = 77.2090,
  initialAddress = '',
  onLocationChange
}) => {
  const [position, setPosition] = useState({
    lat: initialLat,
    lng: initialLng,
    address: initialAddress
  });
  const [isLocating, setIsLocating] = useState(false);
  const [mapCenter, setMapCenter] = useState([initialLat, initialLng]);

  const handleCoordinatesUpdate = async (lat, lng) => {
    setPosition((prev) => ({ ...prev, lat, lng }));
    setMapCenter([lat, lng]);

    // Reverse geocode to get human address
    try {
      const address = await reverseGeocodeCoordinates(lat, lng);
      const updated = { lat, lng, address };
      setPosition(updated);
      if (onLocationChange) onLocationChange(updated);
    } catch (e) {
      const fallback = { lat, lng, address: `${lat.toFixed(5)}, ${lng.toFixed(5)}` };
      setPosition(fallback);
      if (onLocationChange) onLocationChange(fallback);
    }
  };

  const handleUseCurrentGPS = async () => {
    setIsLocating(true);
    try {
      const coords = await getCurrentCoordinates();
      await handleCoordinatesUpdate(coords.lat, coords.lng);
    } catch (err) {
      alert(err.message || 'Could not fetch GPS coordinates.');
    } finally {
      setIsLocating(false);
    }
  };

  return (
    <div className="location-picker-wrapper">
      <div className="picker-toolbar">
        <button
          type="button"
          onClick={handleUseCurrentGPS}
          disabled={isLocating}
          className="btn btn-secondary btn-sm"
        >
          {isLocating ? <Loader2 size={16} className="spin-icon" /> : <Navigation size={16} color="#f43f5e" />}
          <span>{isLocating ? 'Acquiring GPS...' : 'Use My Current GPS'}</span>
        </button>
        <span className="picker-instructions">
          <MapPin size={14} /> Click anywhere on map to pin location
        </span>
      </div>

      <div style={{ width: '100%', height: '280px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <MapContainer
          center={mapCenter}
          zoom={14}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapCenter center={mapCenter} />
          <MapClickHandler onLocationSelected={handleCoordinatesUpdate} />
          {position.lat && position.lng && (
            <Marker position={[position.lat, position.lng]} icon={pickerIcon} />
          )}
        </MapContainer>
      </div>

      <div className="picker-address-preview">
        <span className="address-label">Selected Incident Coordinates & Address:</span>
        <div className="address-value">
          {position.address || `${position.lat?.toFixed(5)}, ${position.lng?.toFixed(5)}`}
        </div>
      </div>

      <style>{`
        .location-picker-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .picker-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .picker-instructions {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .picker-address-preview {
          background: rgba(15, 23, 42, 0.7);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.85rem;
        }
        .address-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }
        .address-value {
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.4;
        }
        .spin-icon {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LocationPicker;
