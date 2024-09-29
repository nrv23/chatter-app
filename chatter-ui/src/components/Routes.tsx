import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Home } from "./home/home";
import ProtectedRoute from '../utils/protectedRoute';

// routes.js

// Centralización de rutas
const routes = (
  <Routes>
    {/* Rutas públicas */}
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Signup />} />

    {/* Rutas protegidas */}
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Home />} />
      {/* Agrega más rutas protegidas aquí */}
    </Route>
  </Routes>
);

export default routes;