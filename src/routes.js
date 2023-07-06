
import LoginPage from "views/user/LoginPage";
import ChangePassword from "views/user/ChangePassword";

import DashboardPage from "views/main/DashboardPage";
import ForgotPassword from "views/user/ForgotPassword";
import Error500 from "views/user/Error500";
import SettingsPage from "views/main/SettingsPage";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    layoutName: "main",
    layout: "/main",
    showInMenu: true
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    layoutName: "main",
    layout: "/main",
    showInMenu: true
  },

  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    layoutName: "main",
    layout: "/user"
  },
  {
    path: "/activateaccount/:activationKey/:employeeId/:uniqueId",
    name: "Account Activation",
    component: ChangePassword,
    layoutName: "user",
    layout: "/user"
  },
  {
    path: "/changepassword/:activationKey/:employeeId/:uniqueId",
    name: "Change Password",
    component: ChangePassword,
    layoutName: "user",
    layout: "/user"
  },
  {
    path: "/forgotpassword",
    name: "Forgot Password",
    component: ForgotPassword,
    layoutName: "user",
    layout: "/user"
  },
  {
    path: "/error500",
    name: "Error Page",
    component: Error500,
    layoutName: "error",
    layout: "/error"
  }
];

export default dashboardRoutes;
