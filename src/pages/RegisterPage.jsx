import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { UserPlus, User, Mail, Phone, Lock, ShieldAlert, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { registerUser } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await registerUser({ name, email, phone, password });
      if (res.success) {
        toast.success(`Account created successfully! Welcome, ${res.user.name}.`);
        navigate('/dashboard');
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Registration failed. Please try again.';
      setError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="container">
        <div className="auth-card-wrapper">
          <div className="auth-card glass-card glass-card-glow">
            <div className="auth-header">
              <div className="auth-icon-badge">
                <UserPlus size={28} color="#f43f5e" />
              </div>
              <h2>Create Aegis Account</h2>
              <p>Set up your trusted emergency safety network</p>
            </div>

            {error && (
              <div className="alert alert-danger">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label form-label-required">Full Name</label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    className="form-control with-icon"
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    className="form-control with-icon"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Mobile Phone Number</label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    className="form-control with-icon"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-hint">Used for emergency SMS notifications and trusted circles</div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    className="form-control with-icon"
                    placeholder="Minimum 6 characters"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Confirm Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control with-icon"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                disabled={submitting}
                style={{ marginTop: '0.75rem' }}
              >
                <UserPlus size={18} />
                <span>{submitting ? 'Creating Account...' : 'Sign Up for Protection'}</span>
              </button>
            </form>

            <div className="auth-footer">
              <p>
                Already registered?{' '}
                <Link to="/login" className="auth-switch-link">
                  Sign in here <ArrowRight size={14} />
                </Link>
              </p>
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
          padding: 2.5rem 0;
        }
        .auth-card-wrapper {
          max-width: 500px;
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
          margin-bottom: 1.75rem;
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
        .auth-footer {
          margin-top: 1.75rem;
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .auth-switch-link {
          color: var(--primary);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
