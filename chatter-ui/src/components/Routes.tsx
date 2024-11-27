import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Home } from "./home/home";
import ProtectedRoute from "../utils/protectedRoute";
import Chat from "./chat/Chat";

// routes.js

// Centralización de rutas
const routes = (
  <Routes>
    {/* Rutas públicas */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    {/* Rutas protegidas */}
    <Route
      path="/" // Cambia esto por la ruta que deseas proteger
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />

    <Route
      path="/chats/:_id" // Cambia esto por la ruta que deseas proteger
      element={
        <ProtectedRoute>
          <Chat />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default routes;
