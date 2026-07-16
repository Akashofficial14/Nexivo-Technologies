import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import Technology from "../pages/Services/Technology/Technology.jsx";
import Ecommerce from "../pages/Services/Ecommerce/Ecommerce.jsx";
import Marketing from "../pages/Services/Marketing/Marketing.jsx";
import Creative from "../pages/Services/Creative/Creative.jsx";
import Video from "../pages/Services/Video/Video.jsx";
import AboutUs from "../pages/About/AboutUs.jsx";
import Work from "../pages/Work/Work.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import BlogList from "../pages/Blog/BlogList.jsx";
import BlogDetail from "../pages/Blog/BlogDetail.jsx";
import AdminPortal from "../pages/Admin/AdminPortal.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // Nested Services routes
      {
        path: "services/technology",
        element: <Technology />,
      },
      {
        path: "services/ecommerce",
        element: <Ecommerce />,
      },
      {
        path: "services/marketing",
        element: <Marketing />,
      },
      {
        path: "services/creative",
        element: <Creative />,
      },
      {
        path: "services/video",
        element: <Video />,
      },
      // Additional navigation routes
      {
        path: "about",
        element: <AboutUs />,
      },
      /* Commented out our-work per startup requirements (Work page is located at src/pages/Work/Work.jsx)
      {
        path: "our-work",
        element: <Work />,
      },
      */
      {
        path: "blogs",
        element: <BlogList />,
      },
      {
        path: "blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "admin",
        element: <AdminPortal />,
      },
    ],
  },
]);
