import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { ShieldCheck, Mail, Lock, LogIn, Sparkles, AlertCircle, ArrowLeft } from 'lucide-react';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { loginUser } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please provide administrative credentials.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await loginUser({ email, password });
      if (res.success) {
        if (res.user.role === 'admin') {
          toast.success('Admin authentication verified. Welcome to Moderator Portal.');
          navigate('/admin/dashboard');
        } else {
          setError('Access Denied: This account does not possess administrator privileges.');
          toast.error('Account is not an administrator.');
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Authentication failed.';
      setError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const fillAdminCredentials = () => {
    setEmail('admin@womensafety.org');
    setPassword('Admin@12345');
  };

  return (
    <div className="admin-login-page">
      <div className="container">
        <div className="admin-login-card-wrapper">
          <div className="admin-login-card glass-card">
            <div className="admin-badge-head">
              <div className="admin-shield-icon">
                <ShieldCheck size={32} color="#fbbf24" />
              </div>
              <h2>Administrative Portal</h2>
              <p>Law Enforcement & Safety Moderator Control Center</p>
            </div>

            {error && (
              <div className="alert alert-danger">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label className="form-label form-label-required">Staff Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    className="form-control with-icon"
                    placeholder="admin@womensafety.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Security Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    className="form-control with-icon"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg admin-submit-btn"
                disabled={submitting}
              >
                <LogIn size={18} />
                <span>{submitting ? 'Verifying Credentials...' : 'Authenticate as Admin'}</span>
              </button>

              {/* Demo Credentials Quick-Fill */}
              <div className="demo-credentials-box">
                <button
                  type="button"
                  onClick={fillAdminCredentials}
                  className="btn btn-secondary btn-sm btn-block"
                >
                  <Sparkles size={15} color="#fbbf24" />
                  <span>Fill Default Admin Credentials (admin@womensafety.org)</span>
                </button>
              </div>
            </form>

            <div className="admin-footer">
              <Link to="/login" className="return-citizen-link">
                <ArrowLeft size={15} /> Return to Citizen User Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .admin-login-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 0;
        }
        .admin-login-card-wrapper {
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }
        .admin-login-card {
          padding: 2.5rem 2rem;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(251, 191, 36, 0.35);
        }
        .admin-badge-head {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .admin-shield-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-lg);
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .admin-badge-head h2 {
          font-size: 1.65rem;
          margin-bottom: 0.35rem;
        }
        .admin-badge-head p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .admin-submit-btn {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
          border: none;
        }
        .admin-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }
        .admin-footer {
          margin-top: 1.75rem;
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
        .return-citizen-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .return-citizen-link:hover {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default AdminLoginPage;
