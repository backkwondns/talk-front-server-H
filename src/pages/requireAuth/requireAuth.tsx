import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "src/libs/accessToken";

function RequireAuth(): JSX.Element {
  const location = useLocation();
  if (!getAccessToken()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
