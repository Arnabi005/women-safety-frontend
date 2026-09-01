import React from 'react';
import { Clock, Eye, CheckCircle2, XCircle } from 'lucide-react';
import { getStatusBadgeClass } from '../../utils/formatters';

const ReportStatusBadge = ({ status }) => {
  const normalized = status || 'Pending';
  const badgeClass = getStatusBadgeClass(normalized);

  const getIcon = () => {
    switch (normalized.toLowerCase()) {
      case 'reviewing':
        return <Eye size={13} />;
      case 'resolved':
        return <CheckCircle2 size={13} />;
      case 'rejected':
        return <XCircle size={13} />;
      case 'pending':
      default:
        return <Clock size={13} />;
    }
  };

  return (
    <span className={`badge ${badgeClass}`}>
      {getIcon()}
      <span>{normalized}</span>
    </span>
  );
};

export default ReportStatusBadge;
