import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = null;
  return <div>{user ? <Navigate to="/" /> : children}</div>;
};

export default PublicRoute;
