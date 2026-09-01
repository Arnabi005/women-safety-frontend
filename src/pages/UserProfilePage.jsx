import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import {
  User,
  Mail,
  Phone,
  Heart,
  FileText,
  Lock,
  Save,
  CheckCircle2,
  AlertCircle,
  Shield,
  Loader2,
  Calendar
} from 'lucide-react';
import { formatDate } from '../utils/formatters';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'];

const UserProfilePage = () => {
  const { user, updateUser } = useAuth();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bloodGroup: '',
    medicalNotes: '',
    emergencyMessage: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [submittingProfile, setSubmittingProfile] = useState(false);
  const [submittingPassword, setSubmittingPassword] = useState(false);
  const [profileError, setProfileError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        bloodGroup: user.emergencyInfo?.bloodGroup || '',
        medicalNotes: user.emergencyInfo?.medicalNotes || '',
        emergencyMessage: user.emergencyInfo?.emergencyMessage || 'I am in danger and need immediate assistance. Here is my live location:'
      });
    }
  }, [user]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileError('');
    setSubmittingProfile(true);

    try {
      const res = await updateUser({
        name: formData.name,
        phone: formData.phone,
        emergencyInfo: {
          bloodGroup: formData.bloodGroup,
          medicalNotes: formData.medicalNotes,
          emergencyMessage: formData.emergencyMessage
        }
      });

      if (res.success) {
        toast.success('Emergency profile & medical info updated successfully!');
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to update profile.';
      setProfileError(msg);
      toast.error(msg);
    } finally {
      setSubmittingProfile(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');

    if (passwordData.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters.');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setSubmittingPassword(true);
    try {
      const res = await updateUser({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });

      if (res.success) {
        toast.success('Security password updated successfully!');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: ''
        });
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to change password. Check current password.';
      setPasswordError(msg);
      toast.error(msg);
    } finally {
      setSubmittingPassword(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        {/* Header */}
        <div className="profile-header-card glass-card">
          <div className="avatar-badge">
            <User size={36} color="#ffffff" />
          </div>
          <div className="profile-hero-info">
            <div className="role-tag">
              <Shield size={14} color="#f43f5e" />
              <span>{user?.role === 'admin' ? 'System Administrator' : 'Protected Citizen'}</span>
            </div>
            <h1>{user?.name}</h1>
            <p className="profile-email">
              <Mail size={14} /> {user?.email} • <Calendar size={14} /> Member since {formatDate(user?.createdAt)}
            </p>
          </div>
        </div>

        <div className="profile-layout-grid">
          {/* Main Info Form */}
          <div className="profile-main-column glass-card">
            <div className="card-section-head">
              <User size={20} color="#f43f5e" />
              <h3>Personal & Emergency Contact Information</h3>
            </div>

            {profileError && (
              <div className="alert alert-danger">
                <AlertCircle size={18} />
                <span>{profileError}</span>
              </div>
            )}

            <form onSubmit={handleProfileSubmit} className="profile-form">
              <div className="grid-2 form-row">
                <div className="form-group">
                  <label className="form-label form-label-required">Full Legal Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required">Primary Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid-2 form-row">
                <div className="form-group">
                  <label className="form-label">Blood Group</label>
                  <select
                    className="form-control"
                    value={formData.bloodGroup}
                    onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((bg) => (
                      <option key={bg} value={bg} style={{ background: '#111827' }}>
                        {bg}
                      </option>
                    ))}
                  </select>
                  <div className="form-hint">Displayed to emergency responders & hospital wings</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Critical Medical Notes / Allergies</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Asthmatic, Penicillin allergy, Diabetic"
                    value={formData.medicalNotes}
                    onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                  />
                  <div className="form-hint">Appended to distress broadcasts for first responders</div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Customized Distress Broadcast Message</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={formData.emergencyMessage}
                  onChange={(e) => setFormData({ ...formData, emergencyMessage: e.target.value })}
                  placeholder="The default message sent to your emergency circle with live GPS coordinates..."
                ></textarea>
                <div className="form-hint">
                  Your live GPS coordinates and street address will be automatically appended to this message.
                </div>
              </div>

              <button
                type="submit"
                disabled={submittingProfile}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                <Save size={16} />
                <span>{submittingProfile ? 'Saving...' : 'Save Profile Changes'}</span>
              </button>
            </form>
          </div>

          {/* Password & Security Column */}
          <div className="profile-security-column glass-card">
            <div className="card-section-head">
              <Lock size={20} color="#818cf8" />
              <h3>Security & Password</h3>
            </div>

            {passwordError && (
              <div className="alert alert-danger">
                <AlertCircle size={18} />
                <span>{passwordError}</span>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="security-form">
              <div className="form-group">
                <label className="form-label form-label-required">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter existing password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Minimum 6 characters"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter new password"
                  value={passwordData.confirmNewPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submittingPassword}
                className="btn btn-secondary btn-block"
              >
                <Lock size={16} />
                <span>{submittingPassword ? 'Updating...' : 'Update Password'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .profile-page {
          padding-bottom: 3rem;
        }
        .profile-header-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .avatar-badge {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(244, 63, 94, 0.4);
          flex-shrink: 0;
        }
        .role-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.4rem;
        }
        .profile-hero-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.25rem;
        }
        .profile-email {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .profile-layout-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 1.75rem;
        }
        .profile-main-column, .profile-security-column {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .card-section-head {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }
        .card-section-head h3 {
          font-size: 1.15rem;
        }
        .profile-form, .security-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-row {
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .profile-layout-grid { grid-template-columns: 1fr; }
          .profile-header-card { flex-direction: column; text-align: center; }
          .profile-email { justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default UserProfilePage;
