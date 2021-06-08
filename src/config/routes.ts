import IRoute from "../interfaces/route";
import { Home } from "../Pages/Home";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  // {
  //   path: "/about",
  //   name: "About Page",
  //   component: AboutPage,
  //   exact: true,
  // },
  // {
  //   path: "/about/:number",
  //   name: "About Page",
  //   component: AboutPage,
  //   exact: true,
  // },
];

export default routes;
