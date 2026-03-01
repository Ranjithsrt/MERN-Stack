import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const ProtectedRoute = ({ children }) => {
  const user = "ram";
  return (
    <div>
      {user ? <Layout>{children}</Layout> : <Navigate to="/register" />}
    </div>
  );
};

export default ProtectedRoute;
