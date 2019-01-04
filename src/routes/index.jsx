import Pages from "../components/layouts/Pages.jsx";
import Dashboard from "../components/layouts/Dashboard.jsx";

var indexRoutes = [
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Dashboard, auth: "Private" }
];

export default indexRoutes;
