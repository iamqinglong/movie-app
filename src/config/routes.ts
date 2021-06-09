import IRoute from "../interfaces/route";
import { Favorite } from "../Pages/Favorite";
import { Home } from "../Pages/Home";
import { MovieDetail } from "../Pages/MovieDetail";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/movie/:id",
    name: "Movie Details Page",
    component: MovieDetail,
    exact: true,
  },
  {
    path: "/favorites",
    name: "Favorites Page",
    component: Favorite,
    exact: true,
  },
  // {
  //   path: "/about/:number",
  //   name: "About Page",
  //   component: AboutPage,
  //   exact: true,
  // },
];

export default routes;
