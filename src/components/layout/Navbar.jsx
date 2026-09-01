import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  ShieldAlert,
  Shield,
  PhoneCall,
  MapPin,
  FilePlus,
  FileText,
  BookOpen,
  LayoutDashboard,
  User,
  LogOut,
  LogIn,
  UserPlus,
  ShieldCheck,
  Menu,
  X,
  Users
} from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link-item ${isActive ? 'active-nav-link' : ''}`;

  return (
    <>
      <header className="site-navbar">
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon-wrapper">
              <ShieldAlert className="brand-icon" size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-name">AEGIS</span>
              <span className="brand-tag">WOMEN SAFETY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/emergency" className={navLinkClass}>
              <span className="nav-pulse-dot"></span>
              Emergency SOS
            </NavLink>
            <NavLink to="/location" className={navLinkClass}>
              Live Location
            </NavLink>
            <NavLink to="/contacts" className={navLinkClass}>
              Contacts
            </NavLink>
            <NavLink to="/report" className={navLinkClass}>
              Report Issue
            </NavLink>
            <NavLink to="/safety-tips" className={navLinkClass}>
              Safety Tips
            </NavLink>
          </nav>

          {/* Auth & Quick Action Actions */}
          <div className="nav-actions">
            <Link to="/emergency" className="btn btn-primary btn-sm emergency-nav-btn">
              <PhoneCall size={16} />
              <span>SOS</span>
            </Link>

            {isAuthenticated ? (
              <div className="user-dropdown-container">
                <Link to="/dashboard" className="btn btn-secondary btn-sm user-badge-btn">
                  <LayoutDashboard size={16} />
                  <span className="desktop-only-text">{user?.name?.split(' ')[0] || 'Dashboard'}</span>
                </Link>

                {isAdmin && (
                  <Link to="/admin/dashboard" className="btn btn-sm admin-badge-btn" title="Admin Control Center">
                    <ShieldCheck size={16} color="#fbbf24" />
                    <span className="desktop-only-text">Admin</span>
                  </Link>
                )}

                <button onClick={handleLogout} className="btn btn-secondary btn-sm logout-btn" title="Sign out">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="guest-nav-links">
                <Link to="/login" className="btn btn-secondary btn-sm">
                  <LogIn size={15} />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm desktop-only-flex">
                  <UserPlus size={15} />
                  <span>Register</span>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-links">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/emergency" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f43f5e', fontWeight: 700 }}>
                <ShieldAlert size={18} /> Emergency SOS Hotlines
              </NavLink>
              <NavLink to="/location" onClick={() => setMobileMenuOpen(false)}>
                <MapPin size={18} /> Live Location & Map
              </NavLink>
              <NavLink to="/contacts" onClick={() => setMobileMenuOpen(false)}>
                <Users size={18} /> Trusted Contacts
              </NavLink>
              <NavLink to="/report" onClick={() => setMobileMenuOpen(false)}>
                <FilePlus size={18} /> Report Safety Incident
              </NavLink>
              <NavLink to="/my-reports" onClick={() => setMobileMenuOpen(false)}>
                <FileText size={18} /> My Reports History
              </NavLink>
              <NavLink to="/safety-tips" onClick={() => setMobileMenuOpen(false)}>
                <BookOpen size={18} /> Safety Tips & Guides
              </NavLink>

              <hr className="mobile-nav-divider" />

              {isAuthenticated ? (
                <>
                  <NavLink to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <LayoutDashboard size={18} /> User Dashboard
                  </NavLink>
                  <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>
                    <User size={18} /> My Profile & Medical Info
                  </NavLink>
                  {isAdmin && (
                    <NavLink to="/admin/dashboard" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fbbf24' }}>
                      <ShieldCheck size={18} /> Admin Dashboard
                    </NavLink>
                  )}
                  <button onClick={handleLogout} className="mobile-logout-btn">
                    <LogOut size={18} /> Sign Out ({user?.name})
                  </button>
                </>
              ) : (
                <div className="mobile-auth-group">
                  <Link to="/login" className="btn btn-secondary btn-block" onClick={() => setMobileMenuOpen(false)}>
                    <LogIn size={16} /> Sign In
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-block" onClick={() => setMobileMenuOpen(false)}>
                    <UserPlus size={16} /> Create Free Account
                  </Link>
                  <Link to="/admin/login" className="admin-login-link-subtle" onClick={() => setMobileMenuOpen(false)}>
                    Admin Staff Portal
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Embedded navbar styling */}
      <style>{`
        .site-navbar {
          position: sticky;
          top: 0;
          z-index: 999;
          background: rgba(10, 14, 23, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .brand-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(244, 63, 94, 0.5);
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #ffffff;
          display: block;
          line-height: 1;
        }
        .brand-tag {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--primary);
          font-weight: 700;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link-item {
          color: var(--text-secondary);
          font-size: 0.92rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.25rem;
          position: relative;
          transition: var(--transition-fast);
        }
        .nav-link-item:hover {
          color: var(--text-primary);
        }
        .active-nav-link {
          color: #ffffff !important;
          font-weight: 600;
        }
        .active-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--primary);
        }
        .nav-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f43f5e;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
          100% { transform: scale(0.9); opacity: 1; }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-dropdown-container, .guest-nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .admin-badge-btn {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.4);
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 6px;
        }
        .mobile-nav-drawer {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 1.25rem;
          animation: fadeIn 0.2s ease-out;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .mobile-nav-links a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-size: 1rem;
          padding: 0.5rem 0;
        }
        .mobile-nav-divider {
          border: 0;
          height: 1px;
          background: var(--border-color);
          margin: 0.5rem 0;
        }
        .mobile-logout-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          width: 100%;
        }
        .mobile-auth-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .admin-login-link-subtle {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-align: center;
          margin-top: 0.25rem;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
          .desktop-only-text { display: none; }
          .desktop-only-flex { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
