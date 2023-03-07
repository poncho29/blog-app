import React from 'react'
import { Navigate } from 'react-router-dom';

import { useAuth } from './auth'

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to='/login' />
  }

  return (
    <>
      { children }
    </>
  )
}
