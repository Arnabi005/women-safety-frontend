import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import AdminRoute from './components/layout/AdminRoute';

// All 14 Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EmergencyPage from './pages/EmergencyPage';
import TrustedContactsPage from './pages/TrustedContactsPage';
import LocationPage from './pages/LocationPage';
import ReportSafetyIssuePage from './pages/ReportSafetyIssuePage';
import MyReportsPage from './pages/MyReportsPage';
import SafetyTipsPage from './pages/SafetyTipsPage';
import UserProfilePage from './pages/UserProfilePage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="emergency" element={<EmergencyPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="report" element={<ReportSafetyIssuePage />} />
        <Route path="safety-tips" element={<SafetyTipsPage />} />
        <Route path="admin/login" element={<AdminLoginPage />} />

        {/* Citizen Protected Routes */}
        <Route
          path="contacts"
          element={
            <ProtectedRoute>
              <TrustedContactsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="my-reports"
          element={
            <ProtectedRoute>
              <MyReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <UserDashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Administrator Protected Route */}
        <Route
          path="admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboardPage />
            </AdminRoute>
          }
        />

        {/* 404 Catch All */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
