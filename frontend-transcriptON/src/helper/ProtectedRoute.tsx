import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const ProtectedRoute = ({ children }: any) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" />;
};
