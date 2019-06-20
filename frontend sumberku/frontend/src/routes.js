import DashboardPage from "./components/Dashboard";
import LoginPage from "./components/User_Sessions";
import RegisterPage from "./components/User_Sessions/register";
import ProfilePage from "./components/User_Sessions/profile";
import AdminPage from "./components/Admin";
// import ChooseActor from "./components/Search/chooseactor";
export default [
  { path: "/", component: DashboardPage },
  { path: "/masuk", component: LoginPage },
  { path: "/daftar", component: RegisterPage },
  { path: `/profil/:username`, component: ProfilePage },
  { path: "/admin", component: AdminPage }
  //   { path: `/choose/:actor`, component: ChooseActor }
  // { path: "/forgetpassword", component: ForgetPassword },
];
