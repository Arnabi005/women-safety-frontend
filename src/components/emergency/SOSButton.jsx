import React, { useState } from 'react';
import { AlertCircle, Volume2, VolumeX, ShieldAlert, Navigation } from 'lucide-react';
import { sirenPlayer } from '../../utils/audio';
import { getCurrentCoordinates, reverseGeocodeCoordinates, getGoogleMapsLink } from '../../utils/geolocation';
import { useToast } from '../../context/ToastContext';

const SOSButton = ({ onTriggerSOS, size = 'large' }) => {
  const [isActivating, setIsActivating] = useState(false);
  const [isSirenOn, setIsSirenOn] = useState(false);
  const toast = useToast();

  const handleSOSTrigger = async () => {
    setIsActivating(true);
    // Start siren
    sirenPlayer.start();
    setIsSirenOn(true);

    try {
      // Get location
      const coords = await getCurrentCoordinates();
      const address = await reverseGeocodeCoordinates(coords.lat, coords.lng);
      const mapsUrl = getGoogleMapsLink(coords.lat, coords.lng);

      toast.error('🚨 EMERGENCY SOS ACTIVATED! Siren sounding.');

      if (onTriggerSOS) {
        onTriggerSOS({
          coords,
          address,
          mapsUrl,
          timestamp: new Date().toISOString()
        });
      }
    } catch (err) {
      toast.warning('SOS triggered! Note: ' + err.message);
      if (onTriggerSOS) {
        onTriggerSOS({
          coords: null,
          address: 'Location coordinates unavailable',
          mapsUrl: '',
          timestamp: new Date().toISOString()
        });
      }
    } finally {
      setIsActivating(false);
    }
  };

  const toggleSiren = () => {
    const newState = sirenPlayer.toggle();
    setIsSirenOn(newState);
  };

  return (
    <div className="sos-component-wrapper">
      <div className="sos-button-container">
        <div className="sos-pulse-ring"></div>
        <div className="sos-pulse-ring"></div>
        <div className="sos-pulse-ring"></div>

        <button
          className="sos-button-main"
          onClick={handleSOSTrigger}
          disabled={isActivating}
          aria-label="Activate Emergency SOS"
          title="Click to activate emergency SOS & siren"
        >
          <span>SOS</span>
          <span className="sos-button-subtext">EMERGENCY</span>
        </button>
      </div>

      <div className="sos-controls">
        <button
          type="button"
          onClick={toggleSiren}
          className={`btn btn-sm ${isSirenOn ? 'btn-danger' : 'btn-secondary'}`}
        >
          {isSirenOn ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{isSirenOn ? 'Silence Siren' : 'Test Siren Alarm'}</span>
        </button>
      </div>

      <style>{`
        .sos-component-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
        }
        .sos-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default SOSButton;
