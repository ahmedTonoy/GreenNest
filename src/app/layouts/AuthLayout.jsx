import { Outlet } from "react-router";
import Navbar from "../../shared/components/navigation/Navbar";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-1 container flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
