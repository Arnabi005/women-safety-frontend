// Formatting helpers for dates, categories, and report status

export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const getCategoryBadgeStyle = (category) => {
  switch (category) {
    case 'Harassment':
      return { background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)' };
    case 'Unsafe Location':
      return { background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)' };
    case 'Suspicious Activity':
      return { background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)' };
    case 'Transport Safety':
      return { background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', border: '1px solid rgba(14, 165, 233, 0.3)' };
    default:
      return { background: 'rgba(148, 163, 184, 0.15)', color: '#cbd5e1', border: '1px solid rgba(148, 163, 184, 0.3)' };
  }
};

export const getSeverityBadgeClass = (severity) => {
  switch (severity?.toLowerCase()) {
    case 'critical':
      return 'badge-severity-critical';
    case 'high':
      return 'badge-severity-high';
    case 'medium':
      return 'badge-severity-medium';
    case 'low':
      return 'badge-severity-low';
    default:
      return 'badge-severity-medium';
  }
};

export const getStatusBadgeClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return 'badge-pending';
    case 'reviewing':
      return 'badge-reviewing';
    case 'resolved':
      return 'badge-resolved';
    case 'rejected':
      return 'badge-rejected';
    default:
      return 'badge-pending';
  }
};
