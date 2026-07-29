import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import PageDetails from "../../features/plant/pages/PageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
  {
    path: "/auth",
    Component: AuthLayout,
  },
  {
    path: "/page-details/1",
    Component: PageDetails,
  },
]);

export default router;
