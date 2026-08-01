import { Outlet } from "react-router";
import Navbar from "../../shared/components/navigation/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
