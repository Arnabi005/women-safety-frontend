import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getStats, getReports, updateReportStatus, deleteReport } from '../services/adminService';
import ReportStatusBadge from '../components/reports/ReportStatusBadge';
import { formatDate, getCategoryBadgeStyle, getSeverityBadgeClass } from '../utils/formatters';
import { BACKEND_URL } from '../services/api';
import {
  ShieldCheck,
  ShieldAlert,
  Users,
  FileText,
  Clock,
  Eye,
  CheckCircle2,
  XCircle,
  Filter,
  Search,
  Trash2,
  Edit3,
  MapPin,
  ExternalLink,
  Loader2,
  X,
  Save,
  MessageSquare,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

const AdminDashboardPage = () => {
  const { user } = useAuth();
  const toast = useToast();

  const [stats, setStats] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Status Update Modal State
  const [selectedReport, setSelectedReport] = useState(null);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState('Pending');
  const [modalNotes, setModalNotes] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    loadAllAdminData();
  }, [statusFilter, categoryFilter]);

  const loadAllAdminData = async () => {
    setLoading(true);
    try {
      const [statsRes, reportsRes] = await Promise.all([
        getStats(),
        getReports({
          status: statusFilter,
          category: categoryFilter,
          search: searchQuery
        })
      ]);

      if (statsRes.success) setStats(statsRes.stats);
      if (reportsRes.success) setReports(reportsRes.reports || []);
    } catch (err) {
      toast.error('Failed to load administrative reports.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadAllAdminData();
    setRefreshing(false);
    toast.success('Admin dashboard data refreshed.');
  };

  const handleOpenStatusModal = (report) => {
    setSelectedReport(report);
    setModalStatus(report.status || 'Pending');
    setModalNotes(report.adminNotes || '');
    setStatusModalOpen(true);
  };

  const handleSaveStatusUpdate = async (e) => {
    e.preventDefault();
    if (!selectedReport) return;

    setUpdating(true);
    try {
      const res = await updateReportStatus(selectedReport._id, {
        status: modalStatus,
        adminNotes: modalNotes
      });

      if (res.success) {
        toast.success(`Report status updated to ${modalStatus}.`);
        setStatusModalOpen(false);
        // Refresh local report list
        setReports((prev) =>
          prev.map((r) => (r._id === selectedReport._id ? res.report : r))
        );
        // Refresh stats
        const statsRes = await getStats();
        if (statsRes.success) setStats(statsRes.stats);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update report status.');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Permanent Action: Are you sure you want to delete this incident report from the database?')) {
      try {
        const res = await deleteReport(id);
        if (res.success) {
          toast.success('Incident report deleted successfully.');
          setReports((prev) => prev.filter((r) => r._id !== id));
          const statsRes = await getStats();
          if (statsRes.success) setStats(statsRes.stats);
        }
      } catch (err) {
        toast.error('Failed to delete report.');
      }
    }
  };

  return (
    <div className="admin-dashboard-page">
      <div className="container">
        {/* Header */}
        <div className="admin-header glass-card">
          <div className="admin-title-wrap">
            <div className="admin-role-badge">
              <ShieldCheck size={16} color="#fbbf24" />
              <span>Moderator Command Console</span>
            </div>
            <h1>Incident Moderation & Safety Operations</h1>
            <p>
              Review incoming citizen distress hazard reports, update lifecycle status, and dispatch municipal/police remediation notes.
            </p>
          </div>

          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="btn btn-secondary"
          >
            <RefreshCw size={16} className={refreshing ? 'spin-icon' : ''} />
            <span>{refreshing ? 'Syncing...' : 'Refresh Operations'}</span>
          </button>
        </div>

        {/* Top 5 Stats Analytics Cards */}
        {stats && (
          <div className="grid-4 stats-analytics-grid">
            <div className="glass-card stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                <FileText size={22} />
              </div>
              <div>
                <span className="stat-label">Total Reports</span>
                <div className="stat-val">{stats.totalReports}</div>
                <span className="stat-sub">{stats.totalUsers} registered users</span>
              </div>
            </div>

            <div className="glass-card stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                <Clock size={22} />
              </div>
              <div>
                <span className="stat-label">Pending Action</span>
                <div className="stat-val" style={{ color: '#fbbf24' }}>{stats.pendingReports}</div>
                <span className="stat-sub">Requires triage</span>
              </div>
            </div>

            <div className="glass-card stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#c084fc' }}>
                <Eye size={22} />
              </div>
              <div>
                <span className="stat-label">Under Review</span>
                <div className="stat-val" style={{ color: '#c084fc' }}>{stats.reviewingReports}</div>
                <span className="stat-sub">Investigation active</span>
              </div>
            </div>

            <div className="glass-card stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <CheckCircle2 size={22} />
              </div>
              <div>
                <span className="stat-label">Resolved</span>
                <div className="stat-val" style={{ color: '#34d399' }}>{stats.resolvedReports}</div>
                <span className="stat-sub">Hazard remediated</span>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls */}
        <div className="admin-filter-bar glass-card">
          <div className="filter-group">
            <label className="filter-label">Filter Status:</label>
            <select
              className="form-control filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Reviewing">Reviewing</option>
              <option value="Resolved">Resolved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Filter Category:</label>
            <select
              className="form-control filter-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Harassment">Harassment</option>
              <option value="Unsafe Location">Unsafe Location</option>
              <option value="Suspicious Activity">Suspicious Activity</option>
              <option value="Transport Safety">Transport Safety</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="filter-search-box">
            <label className="filter-label">Search Reports:</label>
            <div style={{ position: 'relative' }}>
              <Search size={16} className="search-icon-inside" />
              <input
                type="text"
                className="form-control"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Search description, address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && loadAllAdminData()}
              />
            </div>
          </div>
        </div>

        {/* Reports Moderation Feed */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Loader2 size={36} className="spin-icon" style={{ color: '#fbbf24', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--text-muted)' }}>Loading incident moderation records...</p>
          </div>
        ) : reports.length > 0 ? (
          <div className="admin-reports-table-container glass-card">
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date & ID</th>
                    <th>Category & Severity</th>
                    <th>Report Summary</th>
                    <th>Location</th>
                    <th>Reporter</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => {
                    const catStyle = getCategoryBadgeStyle(report.category);
                    const sevClass = getSeverityBadgeClass(report.severity);
                    const imgUrl = report.imageUrl ? (report.imageUrl.startsWith('http') ? report.imageUrl : `${BACKEND_URL}${report.imageUrl}`) : null;

                    return (
                      <tr key={report._id} className="admin-row">
                        <td>
                          <div className="td-date">{formatDate(report.createdAt)}</div>
                          <span className="td-id">#{report._id.slice(-6)}</span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                            <span className="category-pill" style={catStyle}>
                              {report.category}
                            </span>
                            <span className={`badge ${sevClass}`} style={{ fontSize: '0.72rem' }}>
                              {report.severity || 'Medium'}
                            </span>
                          </div>
                        </td>
                        <td style={{ maxWidth: '320px' }}>
                          <strong className="td-title">{report.title}</strong>
                          <p className="td-desc">{report.description}</p>
                          {imgUrl && (
                            <a href={imgUrl} target="_blank" rel="noopener noreferrer" className="img-attachment-tag">
                              🖼️ View Evidence Photo
                            </a>
                          )}
                          {report.adminNotes && (
                            <div className="td-admin-note">
                              <strong>Note:</strong> {report.adminNotes}
                            </div>
                          )}
                        </td>
                        <td style={{ maxWidth: '200px' }}>
                          <div className="td-location">
                            <MapPin size={14} color="#f43f5e" />
                            <span>{report.location?.address || 'Not specified'}</span>
                          </div>
                          {report.location?.lat && (
                            <a
                              href={`https://www.google.com/maps?q=${report.location.lat},${report.location.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="map-coords-link"
                            >
                              Maps ↗
                            </a>
                          )}
                        </td>
                        <td>
                          {report.isAnonymous ? (
                            <span className="anon-badge">Anonymous</span>
                          ) : report.user ? (
                            <div className="reporter-info">
                              <strong>{report.user.name}</strong>
                              <span>{report.user.phone}</span>
                            </div>
                          ) : (
                            <span className="anon-badge">Guest Citizen</span>
                          )}
                        </td>
                        <td>
                          <ReportStatusBadge status={report.status} />
                        </td>
                        <td>
                          <div className="table-action-btns">
                            <button
                              onClick={() => handleOpenStatusModal(report)}
                              className="btn btn-sm btn-secondary edit-status-btn"
                              title="Update Status & Add Moderator Feedback"
                            >
                              <Edit3 size={15} />
                              <span>Triage</span>
                            </button>
                            <button
                              onClick={() => handleDelete(report._id)}
                              className="btn btn-sm btn-outline-danger delete-btn"
                              title="Delete Record"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <FileText className="empty-state-icon" />
            <h3>No Reports Matching Filter</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              No safety hazard reports found for your current filter query.
            </p>
          </div>
        )}

        {/* Status Update Modal */}
        {statusModalOpen && selectedReport && (
          <div className="modal-backdrop" onClick={() => setStatusModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
              <div className="modal-header">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                  <ShieldCheck size={20} color="#fbbf24" />
                  <span>Update Status: #{selectedReport._id.slice(-6)}</span>
                </h3>
                <button
                  onClick={() => setStatusModalOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSaveStatusUpdate}>
                <div className="modal-body">
                  <div style={{ marginBottom: '1rem', background: 'rgba(15, 23, 42, 0.6)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: '#f8fafc' }}>
                      {selectedReport.title}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {selectedReport.category} • {formatDate(selectedReport.createdAt)}
                    </span>
                  </div>

                  <div className="form-group">
                    <label className="form-label form-label-required">Change Moderation Status</label>
                    <select
                      className="form-control"
                      value={modalStatus}
                      onChange={(e) => setModalStatus(e.target.value)}
                    >
                      <option value="Pending" style={{ background: '#111827' }}>Pending (Needs Triage)</option>
                      <option value="Reviewing" style={{ background: '#111827' }}>Reviewing (Under Investigation / Dispatched)</option>
                      <option value="Resolved" style={{ background: '#111827' }}>Resolved (Remediated / Hazard Cleared)</option>
                      <option value="Rejected" style={{ background: '#111827' }}>Rejected (Duplicate / Unsubstantiated)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Official Moderator Feedback / Notes</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="e.g. Dispatched patrol team to inspect area. Notified municipal electricity board on Aug 27..."
                      value={modalNotes}
                      onChange={(e) => setModalNotes(e.target.value)}
                    ></textarea>
                    <div className="form-hint">
                      This feedback is visible to the citizen reporter in their "My Reports" tracker.
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => setStatusModalOpen(false)}
                    className="btn btn-secondary btn-sm"
                    disabled={updating}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    disabled={updating}
                  >
                    <Save size={16} />
                    <span>{updating ? 'Updating...' : 'Save & Broadcast Status'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .admin-dashboard-page {
          padding-bottom: 3rem;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }
        .admin-title-wrap {
          max-width: 650px;
        }
        .admin-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .admin-title-wrap h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .admin-title-wrap p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .stats-analytics-grid {
          margin-bottom: 2rem;
        }
        .stat-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .stat-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          font-weight: 700;
        }
        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.15;
        }
        .stat-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .admin-filter-bar {
          display: flex;
          align-items: flex-end;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 170px;
        }
        .filter-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .filter-select {
          padding: 0.55rem 0.85rem;
        }
        .filter-search-box {
          flex: 1;
          min-width: 240px;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .search-icon-inside {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .admin-reports-table-container {
          padding: 1.25rem;
          overflow: hidden;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }
        .admin-table th {
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-dim);
          font-weight: 700;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-color);
        }
        .admin-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
          vertical-align: top;
        }
        .admin-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .td-date {
          color: var(--text-primary);
          font-weight: 600;
          white-space: nowrap;
        }
        .td-id {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .td-title {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }
        .td-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-bottom: 0.4rem;
        }
        .img-attachment-tag {
          font-size: 0.78rem;
          color: #fbbf24;
          display: inline-block;
          margin-bottom: 0.35rem;
        }
        .td-admin-note {
          background: rgba(99, 102, 241, 0.1);
          border-left: 2px solid #818cf8;
          padding: 0.35rem 0.6rem;
          font-size: 0.78rem;
          color: #cbd5e1;
          border-radius: 2px;
        }
        .td-location {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }
        .map-coords-link {
          font-size: 0.75rem;
          color: var(--primary);
          display: inline-block;
          margin-top: 4px;
        }
        .reporter-info strong {
          display: block;
          color: var(--text-primary);
        }
        .reporter-info span {
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .anon-badge {
          font-size: 0.75rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .table-action-btns {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboardPage;
