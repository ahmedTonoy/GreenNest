import { use } from "react";
import { AuthContext } from "../providers/auth/AuthContext";
import PageLoadingSpinner from "../../shared/components/ui/PageLoadingSpinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, isLoading } = use(AuthContext);
  if (isLoading) {
    return <PageLoadingSpinner />;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login" />;
  }
  return children;
};

export default PrivateRoute;
