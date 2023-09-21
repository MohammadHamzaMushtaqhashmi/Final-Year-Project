// AuthProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
