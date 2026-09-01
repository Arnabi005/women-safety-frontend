import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { createReport } from '../services/reportService';
import LocationPicker from '../components/map/LocationPicker';
import {
  FilePlus,
  ShieldAlert,
  Upload,
  Image,
  X,
  MapPin,
  AlertTriangle,
  EyeOff,
  CheckCircle2,
  Send,
  Loader2
} from 'lucide-react';

const categories = [
  { id: 'Harassment', label: 'Harassment / Stalking', desc: 'Eve-teasing, catcalling, stalking or physical intimidation' },
  { id: 'Unsafe Location', label: 'Unsafe Location', desc: 'Dark alley, broken streetlights, deserted isolated passage' },
  { id: 'Suspicious Activity', label: 'Suspicious Activity', desc: 'Loitering groups, following vehicles, suspicious behavior' },
  { id: 'Transport Safety', label: 'Transport Safety', desc: 'Reckless cab/auto drivers, route deviations, unmetered transit' },
  { id: 'Other', label: 'Other Hazard', desc: 'Any other safety or public hazard concern' }
];

const severities = ['Low', 'Medium', 'High', 'Critical'];

const ReportSafetyIssuePage = () => {
  const { isAuthenticated, user } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: 'Harassment',
    title: '',
    description: '',
    severity: 'Medium',
    isAnonymous: false,
    lat: 28.6139,
    lng: 77.2090,
    address: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleLocationChange = ({ lat, lng, address }) => {
    setFormData((prev) => ({
      ...prev,
      lat,
      lng,
      address
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size must be less than 5MB.');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title.trim()) {
      setError('Please provide a descriptive title for this safety issue.');
      return;
    }

    if (!formData.description.trim()) {
      setError('Please explain what happened in the description.');
      return;
    }

    setSubmitting(true);
    try {
      // Build FormData for file payload
      const payload = new FormData();
      payload.append('category', formData.category);
      payload.append('title', formData.title);
      payload.append('description', formData.description);
      payload.append('severity', formData.severity);
      payload.append('isAnonymous', formData.isAnonymous);
      payload.append('lat', formData.lat);
      payload.append('lng', formData.lng);
      payload.append('address', formData.address || 'Location coordinates specified');

      if (imageFile) {
        payload.append('image', imageFile);
      }

      const res = await createReport(payload);
      if (res.success) {
        toast.success('Safety report submitted successfully!');
        if (isAuthenticated) {
          navigate('/my-reports');
        } else {
          toast.info('Thank you for reporting! Authorities and moderators have received your incident report.');
          setFormData({
            category: 'Harassment',
            title: '',
            description: '',
            severity: 'Medium',
            isAnonymous: false,
            lat: 28.6139,
            lng: 77.2090,
            address: ''
          });
          handleRemoveImage();
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to submit report. Please check fields.';
      setError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="report-page">
      <div className="container">
        {/* Header */}
        <div className="report-header glass-card">
          <div className="header-tag">
            <ShieldAlert size={16} color="#f43f5e" />
            <span>Community Incident & Hazard Hotline</span>
          </div>
          <h1>Report a Safety Incident or Hazard</h1>
          <p>
            Help build a safer community by reporting harassment, unsafe areas, poorly lit walkways, or transit risks. Reports are reviewed by safety moderators.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="report-form-grid">
          {/* Main Form Details */}
          <div className="form-main-col glass-card">
            {error && (
              <div className="alert alert-danger">
                <AlertTriangle size={18} />
                <span>{error}</span>
              </div>
            )}

            {/* Category Selection */}
            <div className="form-group">
              <label className="form-label form-label-required">Select Hazard / Incident Category</label>
              <div className="category-select-grid">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat.id}
                    className={`category-pill-btn ${formData.category === cat.id ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, category: cat.id })}
                  >
                    <strong>{cat.label}</strong>
                    <span>{cat.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div className="form-group">
              <label className="form-label form-label-required">Report Title / Summary</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Broken streetlights and catcalling near Metro Gate 3"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label className="form-label form-label-required">Detailed Incident Description</label>
              <textarea
                className="form-control"
                rows={5}
                placeholder="Describe what occurred, time of incident, physical landmarks, perpetrator descriptions, or vehicle registration numbers if noted..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              ></textarea>
            </div>

            {/* Severity Selection */}
            <div className="form-group">
              <label className="form-label">Severity Level</label>
              <div className="severity-options-row">
                {severities.map((sev) => (
                  <button
                    type="button"
                    key={sev}
                    className={`severity-btn sev-${sev.toLowerCase()} ${formData.severity === sev ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, severity: sev })}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Photo Upload */}
            <div className="form-group">
              <label className="form-label">Attach Photographic Evidence (Optional)</label>
              {!imagePreview ? (
                <label className="image-upload-dropzone">
                  <Upload size={28} color="#94a3b8" />
                  <span className="upload-main-text">Click to browse or drag & drop photo</span>
                  <span className="upload-sub-text">PNG, JPG, WEBP up to 5MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
              ) : (
                <div className="image-preview-wrapper">
                  <img src={imagePreview} alt="Report attachment preview" className="image-preview-thumb" />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="remove-img-btn"
                    title="Remove attached photo"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Anonymous Toggle */}
            <div className="form-group anonymous-toggle-box">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#f43f5e' }}
                />
                <div>
                  <strong style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
                    <EyeOff size={16} color="#fda4af" /> Submit Anonymously
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Your name and identity will NOT be associated with this report in public/admin views.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Location Map Column */}
          <div className="form-map-col glass-card">
            <div className="map-picker-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} color="#f43f5e" />
                <h3 style={{ fontSize: '1.15rem' }}>Pin Incident Location</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Click on the map or use your GPS to pinpoint the exact location of the issue.
              </p>
            </div>

            <LocationPicker
              initialLat={formData.lat}
              initialLng={formData.lng}
              initialAddress={formData.address}
              onLocationChange={handleLocationChange}
            />

            <div className="submission-actions">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary btn-lg btn-block"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="spin-icon" />
                    <span>Submitting Report...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Safety Report</span>
                  </>
                )}
              </button>
              <p className="privacy-note">
                🔒 All submissions are processed securely in accordance with community safety guidelines.
              </p>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        .report-page {
          padding-bottom: 3rem;
        }
        .report-header {
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .report-header h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .report-header p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .report-form-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.75rem;
        }
        .form-main-col, .form-map-col {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .category-select-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }
        .category-pill-btn {
          text-align: left;
          padding: 0.75rem 1rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .category-pill-btn strong {
          color: var(--text-primary);
          font-size: 0.92rem;
        }
        .category-pill-btn span {
          color: var(--text-muted);
          font-size: 0.78rem;
        }
        .category-pill-btn:hover {
          border-color: rgba(244, 63, 94, 0.4);
          background: rgba(15, 23, 42, 0.85);
        }
        .category-pill-btn.active {
          border-color: var(--primary);
          background: rgba(244, 63, 94, 0.12);
        }
        .category-pill-btn.active strong {
          color: #fda4af;
        }
        .severity-options-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .severity-btn {
          padding: 0.5rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .severity-btn.active.sev-low { background: rgba(16, 185, 129, 0.2); border-color: #10b981; color: #34d399; }
        .severity-btn.active.sev-medium { background: rgba(234, 179, 8, 0.2); border-color: #eab308; color: #facc15; }
        .severity-btn.active.sev-high { background: rgba(249, 115, 22, 0.2); border-color: #f97316; color: #fb923c; }
        .severity-btn.active.sev-critical { background: rgba(239, 68, 68, 0.2); border-color: #ef4444; color: #f87171; }
        .image-upload-dropzone {
          border: 2px dashed var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          transition: var(--transition-fast);
        }
        .image-upload-dropzone:hover {
          border-color: var(--primary);
          background: rgba(244, 63, 94, 0.04);
        }
        .upload-main-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .upload-sub-text {
          font-size: 0.78rem;
          color: var(--text-dim);
        }
        .image-preview-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 200px;
          border: 1px solid var(--border-color);
        }
        .image-preview-thumb {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .remove-img-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .anonymous-toggle-box {
          background: rgba(15, 23, 42, 0.5);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .map-picker-head {
          margin-bottom: 0.5rem;
        }
        .submission-actions {
          margin-top: auto;
          padding-top: 1rem;
        }
        .privacy-note {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-align: center;
          margin-top: 0.75rem;
        }
        @media (max-width: 992px) {
          .report-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ReportSafetyIssuePage;
