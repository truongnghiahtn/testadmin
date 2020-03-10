import Home from "./page/home/TrangChu/index";
import GioiThieu from "./page/home/GioiThieu";
import DieuKhoan from "./page/home/DieuKhoan";
import API from "./page/home/API";
import BoSung from "./page/home/BoSung";
import LienHe from "./page/home/LienHe";
import Dashboard from "./page/admin/Dashboard/Dashboard";
import MoviesAdmin from "./page/admin/MoviesAdmin/MoviesAdmin";
import Website from "./page/admin/website/website";
import Add_movie from "./page/admin/add_movie/add_movie";
import WordsAdmin from "./page/admin/WordsAdmin/WordsAdmin";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/gioi-thieu",
    exact: true,
    component: GioiThieu
  },
  {
    path: "/dieu-khoan",
    exact: true,
    component: DieuKhoan
  },
  {
    path: "/API",
    exact: true,
    component: API
  },
  {
    path: "/bo-sung",
    exact: true,
    component: BoSung
  },
  {
    path: "/lien-he",
    exact: true,
    component: LienHe
  }
];

export { routesHome };

const routesAdmin = [
  {
    path: "/admin-dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "/movie",
    exact: false,
    component: MoviesAdmin
  },
  {
    path: "/admin-website",
    exact: false,
    component: Website
  },
  {
    path: "/add-movie",
    exact: false,
    component: Add_movie
  },
  {
    path: "/admin/word",
    exact: false,
    component: WordsAdmin
  }
];

export { routesAdmin };
