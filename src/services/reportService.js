import api from './api';

export const createReport = async (formDataOrJson) => {
  // If instance of FormData, send with multipart/form-data header
  const isFormData = formDataOrJson instanceof FormData;
  const response = await api.post('/reports', formDataOrJson, {
    headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {}
  });
  return response.data;
};

export const getMyReports = async () => {
  const response = await api.get('/reports/my');
  return response.data;
};

export const getReportById = async (id) => {
  const response = await api.get(`/reports/${id}`);
  return response.data;
};
