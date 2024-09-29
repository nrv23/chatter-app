import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useGetMe from '../hooks/useGetMe';


const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useGetMe(); // Usamos el hook de autenticación

  if (loading) {
    return <p>Loading...</p>; // Muestra un mensaje de carga mientras se verifica la autenticación
  }

  // Si el usuario no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  // Si está autenticado, renderiza el componente protegido
  return <Outlet />;
};

export default ProtectedRoute;