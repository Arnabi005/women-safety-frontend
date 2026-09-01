import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { LogIn, Mail, Lock, ShieldAlert, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { loginUser } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await loginUser({ email, password });
      if (res.success) {
        toast.success(`Welcome back, ${res.user.name}!`);
        if (res.user.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate(from, { replace: true });
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Login failed. Please check your credentials.';
      setError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const fillDemoUser = () => {
    setEmail('user@womensafety.org');
    setPassword('Password@123');
  };

  return (
    <div className="auth-page-container">
      <div className="container">
        <div className="auth-card-wrapper">
          <div className="auth-card glass-card glass-card-glow">
            <div className="auth-header">
              <div className="auth-icon-badge">
                <ShieldAlert size={28} color="#f43f5e" />
              </div>
              <h2>Sign In to Aegis</h2>
              <p>Access your personal safety command center & emergency circle</p>
            </div>

            {error && (
              <div className="alert alert-danger">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label form-label-required">Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    className="form-control with-icon"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="form-label form-label-required">Password</label>
                </div>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    className="form-control with-icon"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                disabled={submitting}
                style={{ marginTop: '0.5rem' }}
              >
                <LogIn size={18} />
                <span>{submitting ? 'Signing In...' : 'Sign In'}</span>
              </button>

              {/* Demo Account Quick-Fill */}
              <div className="demo-credentials-box">
                <button
                  type="button"
                  onClick={fillDemoUser}
                  className="btn btn-secondary btn-sm btn-block"
                >
                  <Sparkles size={15} color="#fbbf24" />
                  <span>Fill Demo User Credentials</span>
                </button>
              </div>
            </form>

            <div className="auth-footer">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="auth-switch-link">
                  Create free account <ArrowRight size={14} />
                </Link>
              </p>
              <div className="admin-redirect-subtle">
                <span>Authorized law enforcement or moderator? </span>
                <Link to="/admin/login">Admin Staff Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;
        }
        .auth-card-wrapper {
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }
        .auth-card {
          padding: 2.25rem;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.85);
        }
        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .auth-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .auth-header h2 {
          font-size: 1.65rem;
          margin-bottom: 0.35rem;
        }
        .auth-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .form-control.with-icon {
          padding-left: 2.75rem;
        }
        .demo-credentials-box {
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px dashed var(--border-color);
        }
        .auth-footer {
          margin-top: 1.75rem;
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .auth-switch-link {
          color: var(--primary);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
        }
        .admin-redirect-subtle {
          font-size: 0.78rem;
          color: var(--text-dim);
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
        }
        .admin-redirect-subtle a {
          color: #fbbf24;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
