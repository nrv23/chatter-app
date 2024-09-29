import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Home } from "./home/home";
import ProtectedRoute from "../utils/protectedRoute";

// routes.js

// Centralización de rutas
const routes = (
  <Routes>
    {/* Rutas públicas */}
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Signup />} />

    {/* Rutas protegidas */}
    <Route
      path="/" // Cambia esto por la ruta que deseas proteger
      element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default routes;
