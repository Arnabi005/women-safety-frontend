import api from './api';

export const getStats = async () => {
  const response = await api.get('/admin/stats');
  return response.data;
};

export const getReports = async (params = {}) => {
  const response = await api.get('/admin/reports', { params });
  return response.data;
};

export const getReportById = async (id) => {
  const response = await api.get(`/admin/reports/${id}`);
  return response.data;
};

export const updateReportStatus = async (id, statusData) => {
  const response = await api.put(`/admin/reports/${id}/status`, statusData);
  return response.data;
};

export const deleteReport = async (id) => {
  const response = await api.delete(`/admin/reports/${id}`);
  return response.data;
};
