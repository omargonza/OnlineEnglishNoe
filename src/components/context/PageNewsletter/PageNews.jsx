import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

const Newsletter = () => {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  </div>
  );
};

export default Newsletter;