import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Main = React.lazy(() => import("../layout/Main"));
import Error from "../pages/ErrorElement/Error";
import Home from "../pages/Home/Home";
import Careers from "../pages/Careers/Careers";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Loader from "../components/Loader/Loader";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
