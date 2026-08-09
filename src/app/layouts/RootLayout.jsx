import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../../shared/components/navigation/Footer";
import Navbar from "../../shared/components/navigation/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-1 container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;
