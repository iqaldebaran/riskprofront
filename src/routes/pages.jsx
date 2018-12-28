import PricingPage from "../components/views/Pages/PricingPage.jsx";
import LoginPage from "../components/views/Pages/LoginPage.jsx";
import RegisterPage from "../components/views/Pages/RegisterPage.jsx";
// import LockScreenPage from "../components/views/Pages/LockScreenPage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// import LockOpen from "@material-ui/icons/LockOpen";

const pagesRoutes = [
  {
    path: "/pages/register",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/pages/login",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: "/pages/pricing-page",
    name: "Pricing Page",
    short: "Pricing",
    mini: "PP",
    icon: MonetizationOn,
    component: PricingPage
  },
  
  // {
  //   path: "/pages/lock-screen-page",
  //   name: "Lock Screen Page",
  //   short: "Lock",
  //   mini: "LSP",
  //   icon: LockOpen,
  //   component: LockScreenPage
  // },
  {
    redirect: true,
    path: "/pages",
    pathTo: "/pages/register",
    name: "Register Page"
  }
];

export default pagesRoutes;
