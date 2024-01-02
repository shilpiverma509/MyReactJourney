import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { Error } from "./src/components/Error";
import RestrauntMenu from "./src/components/RestrauntMenu";
//import Grocery from "./src/components/Grocery";

//chunking
//lazyLoading
//dynamic loading
//dynamic Importing
//On demand Loading
//Dynamic bundling

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* Body should be only for path "/" */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },

      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
