import Home from "./page/home/TrangChu/index";
import GioiThieu from "./page/home/GioiThieu";
import DieuKhoan from "./page/home/DieuKhoan";
import API from "./page/home/API";
import BoSung from "./page/home/BoSung";
import LienHe from "./page/home/LienHe";
import Dashboard from "./page/admin/Dashboard/Dashboard";
import MoviesAdmin from "./page/admin/MoviesAdmin/MoviesAdmin";
import Website from "./page/admin/website/website";
import WordsAdmin from "./page/admin/WordsAdmin/WordsAdmin";
import Admin from "./page/admin/Admin/Admin";
import CustomerAdmin from "./page/admin/CustomerAdmin/CustomerAdmin";

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
    path: "/admin-movie",
    exact: false,
    component: MoviesAdmin
  },
  {
    path: "/admin-website",
    exact: false,
    component: Website
  },
  {
    path: "/admin-word",
    exact: false,
    component: WordsAdmin
  },
  {
    path: "/admin-user",
    exact: false,
    component: Admin
  },
  {
    path: "/admin-customer",
    exact: false,
    component: CustomerAdmin
  }
];

export { routesAdmin };
