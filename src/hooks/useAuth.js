import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../api';


export const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh");
  
    try {
      const res = await api.post("/token/refresh/", {
        refresh: refreshToken,
      });
  
      if (res.status === 200) {
        localStorage.setItem("access", res.data.access);
        setIsAuthorized(true);
        return true;
      } else {
        setIsAuthorized(false);
        return false;
      }
    } catch (error) {
      setIsAuthorized(false);
      console.error("Error refreshing token:", error);
      return false;
    }
  };

  const checkAuth = async () => {
    const token = localStorage.getItem("access");
    if (!token) {
      setIsAuthorized(false);
      return false;
    }
  
    try {
      const decoded = jwtDecode(token);
      const expiry_date = decoded.exp;
      const current_time = Date.now() / 1000;
  
      if (current_time > expiry_date) {
        return await refreshToken();
      } else {
        setIsAuthorized(true);
        return true;
      }
    } catch (error) {
      console.error("Error decoding JWT:", error);
      setIsAuthorized(false);
      localStorage.removeItem("access");
      return false;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthorized(false);
  };

  return {
    isAuthorized, 
    checkAuth, 
    logout
  };
};