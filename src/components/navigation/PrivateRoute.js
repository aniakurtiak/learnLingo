import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, authUser }) => {
    return authUser ? children : <Navigate to="/"></Navigate>;
  };
