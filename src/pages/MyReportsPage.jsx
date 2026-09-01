import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getMyReports } from '../services/reportService';
import ReportCard from '../components/reports/ReportCard';
import {
  FileText,
  FilePlus,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  Eye,
  AlertTriangle,
  Loader2
} from 'lucide-react';

const statusTabs = ['All', 'Pending', 'Reviewing', 'Resolved', 'Rejected'];

const MyReportsPage = () => {
  const { user } = useAuth();
  const toast = useToast();

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStatus, setActiveStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await getMyReports();
      if (res.success) {
        setReports(res.reports || []);
      }
    } catch (err) {
      toast.error('Failed to load your submitted reports.');
    } finally {
      setLoading(false);
    }
  };

  const filteredReports = reports.filter((r) => {
    const matchesStatus = activeStatus === 'All' || r.status === activeStatus;
    const matchesSearch =
      r.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.location?.address?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="my-reports-page">
      <div className="container">
        {/* Header Strip */}
        <div className="reports-header-strip glass-card">
          <div className="header-info">
            <div className="header-badge">
              <FileText size={16} color="#f43f5e" />
              <span>Incident Tracking</span>
            </div>
            <h1>My Safety Hazard Reports</h1>
            <p>
              Track real-time progress and moderator feedback on safety issues and incidents you have submitted to the portal.
            </p>
          </div>

          <Link to="/report" className="btn btn-primary btn-lg">
            <FilePlus size={18} />
            <span>File New Incident Report</span>
          </Link>
        </div>

        {/* Filters Toolbar */}
        <div className="reports-filter-bar">
          <div className="status-tabs-row">
            {statusTabs.map((tab) => {
              const count = tab === 'All' ? reports.length : reports.filter((r) => r.status === tab).length;
              return (
                <button
                  key={tab}
                  className={`status-tab-btn ${activeStatus === tab ? 'active' : ''}`}
                  onClick={() => setActiveStatus(tab)}
                >
                  <span>{tab}</span>
                  <span className="tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="search-filter-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search reports by title, category, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Reports Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Loader2 size={36} className="spin-icon" style={{ color: '#f43f5e', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--text-muted)' }}>Retrieving your submitted reports...</p>
          </div>
        ) : filteredReports.length > 0 ? (
          <div className="grid-2 reports-grid">
            {filteredReports.map((report) => (
              <ReportCard key={report._id} report={report} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <FileText className="empty-state-icon" />
            <h3>No Reports Found</h3>
            <p style={{ maxWidth: '420px', margin: '0.5rem auto 1.5rem', color: 'var(--text-muted)' }}>
              {searchTerm || activeStatus !== 'All'
                ? 'No reports matching your selected filter criteria.'
                : 'You have not submitted any safety incident reports yet. Help keep your neighbourhood safe by reporting unlit areas, harassment, or transport risks.'}
            </p>
            {activeStatus === 'All' && !searchTerm && (
              <Link to="/report" className="btn btn-primary">
                <FilePlus size={16} />
                <span>Submit Your First Safety Report</span>
              </Link>
            )}
          </div>
        )}
      </div>

      <style>{`
        .my-reports-page {
          padding-bottom: 3rem;
        }
        .reports-header-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-info {
          max-width: 650px;
        }
        .header-badge {
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
        .header-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-info p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .reports-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .status-tabs-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .status-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .status-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }
        .status-tab-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
        }
        .tab-count {
          font-size: 0.72rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-full);
        }
        .search-filter-box {
          position: relative;
          min-width: 280px;
        }
        .search-filter-box .search-icon {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .search-filter-box .search-input {
          padding-left: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default MyReportsPage;
