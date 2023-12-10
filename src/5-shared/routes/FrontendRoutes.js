import Login from "../../3-feature/frontend/auth/Login";
import Register from "../../3-feature/frontend/auth/Register";
import Contact from "../../3-feature/frontend/auth/Contact";
import Gallery from "../../3-feature/frontend/gallery/Gallery";
import Home from "../../3-feature/frontend/home/Home";

export default [
  {
    label: "Home",
    path: "",
    ShowInMenu: true,
    component: <Home />,
  },
  {
    label: "Login",
    path: "login",
    ShowInMenu: true,
    component: <Login />,
  },
  {
    label: "Register",
    path: "register",
    ShowInMenu: true,
    component: <Register />,
  },
  {
    label: "Contact",
    path: "contact",
    ShowInMenu: true,
    component: <Contact />,
  },

  {
    label: "Gallery",
    path: "gallery",
    ShowInMenu: false,
    addRoute: false,
    component: <Gallery />,
  },
];
