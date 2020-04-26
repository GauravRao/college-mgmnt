// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Face from "@material-ui/icons/Face";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Tickets from "views/Tickets/Tickets.jsx";
import Teacher from "views/Teacher/Teacher.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "College Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  
  {
    path: "/event",
    sidebarName: "Manage Event",
    navbarName: "",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/tickets",
    sidebarName: "Manage Tickets",
    navbarName: "",
    icon: LibraryBooks,
    component: Tickets
  },
  {
    path: "/teacher",
    sidebarName: "Manage Teacher",
    navbarName: "",
    icon: Face,
    component: Teacher
  },

  {
    path: "/user",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
