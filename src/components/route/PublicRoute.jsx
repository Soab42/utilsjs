import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function PublicRoute() {
  const [user] = useAuthState(auth);
  return <div>{!user ? <Outlet /> : <Navigate to={"/"} />}</div>;
}
