import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, getMe, updateProfile as apiUpdateProfile } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const res = await getMe();
          if (res.success && res.user) {
            setUser(res.user);
          } else {
            logout();
          }
        } catch (error) {
          console.warn('[AuthContext] Session verification failed, logging out.');
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const loginUser = async (credentials) => {
    const data = await apiLogin(credentials);
    if (data.success && data.token) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
    }
    return data;
  };

  const registerUser = async (userData) => {
    const data = await apiRegister(userData);
    if (data.success && data.token) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
    }
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const updateUser = async (profileData) => {
    const res = await apiUpdateProfile(profileData);
    if (res.success && res.user) {
      setUser(res.user);
    }
    return res;
  };

  const refreshUser = async () => {
    try {
      const res = await getMe();
      if (res.success && res.user) {
        setUser(res.user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!token && !!user,
    isAdmin: !!user && user.role === 'admin',
    loginUser,
    registerUser,
    logout,
    updateUser,
    refreshUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
