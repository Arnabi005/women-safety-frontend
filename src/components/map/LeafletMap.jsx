import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet's default icon path issue with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Emergency User Pin
const createUserIcon = () => {
  return L.divIcon({
    className: 'custom-user-marker',
    html: `
      <div style="
        width: 24px;
        height: 24px;
        background: #f43f5e;
        border: 3px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 15px #f43f5e, 0 2px 6px rgba(0,0,0,0.5);
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
};

// Custom Incident Pin
const createIncidentIcon = (severity = 'Medium') => {
  let color = '#f59e0b';
  if (severity === 'Critical' || severity === 'High') color = '#ef4444';
  if (severity === 'Low') color = '#10b981';

  return L.divIcon({
    className: 'custom-incident-marker',
    html: `
      <div style="
        width: 28px;
        height: 28px;
        background: ${color};
        border: 2px solid #ffffff;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      ">
        <div style="width: 10px; height: 10px; background: #ffffff; border-radius: 50%;"></div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28]
  });
};

// Component to dynamically re-center map when coordinates change
const MapRecenter = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1]) {
      map.flyTo(center, zoom || 15, { animate: true, duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
};

const LeafletMap = ({
  center = [28.6139, 77.2090], // Default fallback (e.g. New Delhi)
  zoom = 14,
  userLocation = null,
  accuracy = null,
  markers = [],
  height = '400px',
  interactive = true
}) => {
  const mapCenter = userLocation ? [userLocation.lat, userLocation.lng] : center;

  return (
    <div style={{ width: '100%', height, position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={interactive}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapRecenter center={mapCenter} zoom={zoom} />

        {/* User Location Marker & Accuracy Circle */}
        {userLocation && (
          <>
            <Marker position={[userLocation.lat, userLocation.lng]} icon={createUserIcon()}>
              <Popup>
                <div style={{ padding: '4px', textAlign: 'center' }}>
                  <strong style={{ color: '#f43f5e' }}>📍 Your Current Position</strong>
                  <div style={{ fontSize: '0.8rem', marginTop: '4px', color: '#94a3b8' }}>
                    {userLocation.address || `${userLocation.lat.toFixed(5)}, ${userLocation.lng.toFixed(5)}`}
                  </div>
                </div>
              </Popup>
            </Marker>
            {accuracy && (
              <Circle
                center={[userLocation.lat, userLocation.lng]}
                radius={accuracy}
                pathOptions={{
                  color: '#f43f5e',
                  fillColor: '#f43f5e',
                  fillOpacity: 0.15,
                  weight: 1.5
                }}
              />
            )}
          </>
        )}

        {/* Additional markers (e.g., reports, safe zones) */}
        {markers.map((marker, index) => {
          if (!marker.lat || !marker.lng) return null;
          return (
            <Marker
              key={marker.id || index}
              position={[marker.lat, marker.lng]}
              icon={createIncidentIcon(marker.severity)}
            >
              <Popup>
                <div style={{ padding: '6px', maxWidth: '220px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#f8fafc' }}>
                    {marker.title || 'Safety Report'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#fda4af', textTransform: 'uppercase', marginTop: '2px', fontWeight: 600 }}>
                    {marker.category} • {marker.severity || 'Medium'}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '6px', lineHeight: 1.4 }}>
                    {marker.description}
                  </p>
                  {marker.address && (
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
                      📍 {marker.address}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
