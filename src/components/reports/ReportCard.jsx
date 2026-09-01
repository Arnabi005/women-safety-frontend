import React, { useState } from 'react';
import { MapPin, Calendar, AlertTriangle, Shield, MessageSquare, Image, ChevronDown, ChevronUp } from 'lucide-react';
import ReportStatusBadge from './ReportStatusBadge';
import { formatDate, getCategoryBadgeStyle, getSeverityBadgeClass } from '../../utils/formatters';
import { BACKEND_URL } from '../../services/api';

const ReportCard = ({ report, showAdminControls = false, onStatusChange, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const categoryStyle = getCategoryBadgeStyle(report.category);
  const severityClass = getSeverityBadgeClass(report.severity);
  const imageUrl = report.imageUrl ? (report.imageUrl.startsWith('http') ? report.imageUrl : `${BACKEND_URL}${report.imageUrl}`) : null;

  return (
    <div className="report-card glass-card">
      <div className="report-card-top">
        <div className="badges-row">
          <span className="category-pill" style={categoryStyle}>
            {report.category}
          </span>
          <span className={`badge ${severityClass}`}>
            {report.severity || 'Medium'} Severity
          </span>
          {report.isAnonymous && (
            <span className="anonymous-pill">Anonymous Report</span>
          )}
        </div>
        <ReportStatusBadge status={report.status} />
      </div>

      <h3 className="report-title">{report.title}</h3>

      <div className="report-meta-row">
        <div className="meta-item">
          <Calendar size={14} />
          <span>{formatDate(report.createdAt)}</span>
        </div>
        {report.location?.address && (
          <div className="meta-item location-item" title={report.location.address}>
            <MapPin size={14} color="#f43f5e" />
            <span className="truncate-text">{report.location.address}</span>
          </div>
        )}
      </div>

      <p className="report-desc">
        {expanded ? report.description : (
          report.description?.length > 140
            ? `${report.description.substring(0, 140)}...`
            : report.description
        )}
      </p>

      {report.description?.length > 140 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="toggle-desc-btn"
        >
          {expanded ? <>Show less <ChevronUp size={14} /></> : <>Read more <ChevronDown size={14} /></>}
        </button>
      )}

      {/* Image Preview if available */}
      {imageUrl && (
        <div className="report-image-preview-box">
          <a href={imageUrl} target="_blank" rel="noopener noreferrer" title="Click to view full resolution">
            <img src={imageUrl} alt="Safety Report Evidence" className="report-evidence-img" />
          </a>
        </div>
      )}

      {/* Admin Notes Section if any */}
      {report.adminNotes && (
        <div className="admin-remark-box">
          <div className="remark-header">
            <Shield size={14} color="#818cf8" />
            <span>Moderator Feedback:</span>
          </div>
          <p className="remark-body">{report.adminNotes}</p>
        </div>
      )}

      <style>{`
        .report-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.35rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .report-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .badges-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .category-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.65rem;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-transform: capitalize;
        }
        .anonymous-pill {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-dim);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .report-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.3;
        }
        .report-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .location-item {
          max-width: 320px;
        }
        .truncate-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .report-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .toggle-desc-btn {
          background: transparent;
          border: none;
          color: var(--primary);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          padding: 0;
          align-self: flex-start;
        }
        .report-image-preview-box {
          margin-top: 0.25rem;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 180px;
          width: 100%;
          border: 1px solid var(--border-color);
        }
        .report-evidence-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .report-evidence-img:hover {
          transform: scale(1.02);
        }
        .admin-remark-box {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
        }
        .remark-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 700;
          color: #a5b4fc;
          margin-bottom: 0.25rem;
        }
        .remark-body {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default ReportCard;
