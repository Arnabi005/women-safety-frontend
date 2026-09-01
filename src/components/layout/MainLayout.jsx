import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { sirenPlayer } from '../../utils/audio';
import { Volume2, VolumeX, AlertTriangle } from 'lucide-react';

const MainLayout = () => {
  const [sirenPlaying, setSirenPlaying] = useState(false);

  useEffect(() => {
    const checkInterval = setInterval(() => {
      setSirenPlaying(sirenPlayer.getStatus());
    }, 400);
    return () => clearInterval(checkInterval);
  }, []);

  const handleStopSiren = () => {
    sirenPlayer.stop();
    setSirenPlaying(false);
  };

  return (
    <div className="page-wrapper">
      {sirenPlaying && (
        <div className="siren-active-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertTriangle size={20} />
            <span>EMERGENCY SIREN ALARM IS CURRENTLY ACTIVE</span>
          </div>
          <button
            onClick={handleStopSiren}
            className="btn btn-sm"
            style={{ background: '#ffffff', color: '#dc2626', fontWeight: 'bold' }}
          >
            <VolumeX size={16} /> Silence Siren
          </button>
        </div>
      )}
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
