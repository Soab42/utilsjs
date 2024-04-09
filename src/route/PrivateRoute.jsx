import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);
  return <div>{user ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}
