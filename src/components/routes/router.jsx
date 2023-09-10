import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import Loading from "./Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",

        element: (
          <Loading>
            <Home />
          </Loading>
        ),
      },
      {
        path: "/about",
        element: (
          <Loading>
            <About />
          </Loading>
        ),
      },
      {
        path: "/contact",
        element: (
          <Loading>
            <Contact />
          </Loading>
        ),
      },
    ],
  },
]);
