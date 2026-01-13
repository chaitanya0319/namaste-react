import React from "react"; import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import Header from "./components/Header"; 
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"; 
import Error from "./components/Error"; 
import RestaurantMenu from "./components/RestuarntMenu";
import React, { lazy, Suspense } from "react";

// Lazy-loaded components
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Grocery /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
