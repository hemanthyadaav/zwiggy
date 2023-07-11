import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../index.css";
import About from "./components/About";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={router} />);
