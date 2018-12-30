import Pages from "../components/layouts/Pages.jsx";
// import RTL from "../components/layouts/RTL.jsx";
import Dashboard from "../components/layouts/Dashboard.jsx";

var indexRoutes = [
  // { path: "/rtl", name: "RTL", component: RTL },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Dashboard, auth: "Private" }
];

export default indexRoutes;
