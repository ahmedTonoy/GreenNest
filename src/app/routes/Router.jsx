import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import PageDetails from "../../features/plant/pages/PageDetails";
import Home from "../../features/home/pages/Home";
import Register from "../../features/auth/pages/Register";
import Login from "../../features/auth/pages/Login";
import Plants from "../../features/plant/pages/Plants";
import MyProfile from "../../features/user/pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "plants",
        Component: Plants,
      },
      {
        path: "profile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
  {
    path: "/page-details/1",
    Component: PageDetails,
  },
]);

export default router;
