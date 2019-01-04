 import Dashboard from "../components/views/Dashboard/Dashboard.jsx";
// import Buttons from "../components/views/Components/Buttons.jsx";
// import GridSystem from "../components/views/Components/GridSystem.jsx";
// import Panels from "../components/views/Components/Panels.jsx";
// import SweetAlert from "../components/views/Components/SweetAlert.jsx";
// import Notifications from "../components/views/Components/Notifications.jsx";
// import Icons from "../components/views/Components/Icons.jsx";
// import Typography from "../components/views/Components/Typography.jsx";
// import RegularForms from "views/Forms/RegularForms.jsx";
// import ExtendedForms from "views/Forms/ExtendedForms.jsx";
// import ValidationForms from "views/Forms/ValidationForms.jsx";
// import Wizard from "views/Forms/Wizard.jsx";
// import RegularTables from "views/Tables/RegularTables.jsx";
// import ExtendedTables from "views/Tables/ExtendedTables.jsx";
// import ReactTables from "views/Tables/ReactTables.jsx";
// import GoogleMaps from "views/Maps/GoogleMaps.jsx";
// import FullScreenMap from "views/Maps/FullScreenMap.jsx";
// import VectorMap from "views/Maps/VectorMap.jsx";
// import Charts from "views/Charts/Charts.jsx";
// import Calendar from "../components/views/Calendar/Calendar.jsx";
import ImpactLeopold from "../components/views/ImpactLeopold/AspectosAmbientales"
// import UserProfile from "views/Pages/UserProfile.jsx";
// import TimelinePage from "views/Pages/Timeline.jsx";

// import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
// import Image from "@material-ui/icons/Image";
// import Apps from "@material-ui/icons/Apps";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import GridOn from "@material-ui/icons/GridOn";
// import Place from "@material-ui/icons/Place";
import ImpactLeopoldIcon from "@material-ui/icons/Tune";

// import Timeline from "@material-ui/icons/Timeline";
// import DateRange from "@material-ui/icons/DateRange";

// var pages = [
//   {
//     path: "/timeline-page",
//     name: "Timeline Page",
//     mini: "TP",
//     component: TimelinePage
//   },
//   {
//     path: "/user-page",
//     name: "User Profile",
//     mini: "UP",
//     component: UserProfile
//   }
// ].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: DashboardIcon,
    component: Dashboard
  },
  // {
  //   collapse: true,
  //   path: "-page",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: Image,
  //   views: pages
  // },


  // {
  //   collapse: true,
  //   path: "/project",
  //   name: "Project",
  //   state: "openComponents",
  //   icon: Apps,
  //   views: [
  //     {
  //       path: "/components/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons
  //     },
  //     {
  //       path: "/components/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem
  //     },
  //     {
  //       path: "/components/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels
  //     },
  //     {
  //       path: "/components/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert
  //     },
  //     {
  //       path: "/components/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications
  //     },
  //     { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
  //     {
  //       path: "/components/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/forms",
  //   name: "Forms",
  //   state: "openForms",
  //   icon: "content_paste",
  //   views: [
  //     {
  //       path: "/forms/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms
  //     },
  //     {
  //       path: "/forms/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms
  //     },
  //     {
  //       path: "/forms/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms
  //     },
  //     { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: GridOn,
  //   views: [
  //     {
  //       path: "/tables/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables
  //     },
  //     {
  //       path: "/tables/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables
  //     },
  //     {
  //       path: "/tables/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: Place,
  //   views: [
  //     {
  //       path: "/maps/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps
  //     },
  //     {
  //       path: "/maps/full-screen-maps",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap
  //     },
  //     {
  //       path: "/maps/vector-maps",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap
  //     }
  //   ]
  // },
 // { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  { path: "/impactleopold", name: "Impact Assesment Leopold", icon: ImpactLeopoldIcon, component: ImpactLeopold },

  // { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  // { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
