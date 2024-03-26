import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { Error } from "./src/components/Error";
import RestrauntMenu from "./src/components/RestrauntMenu";
import { UserContext } from "./src/utils/UserContext";
//import Grocery from "./src/components/Grocery";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

//chunking
//lazyLoading
//dynamic loading
//dynamic Importing
//On demand Loading
//Dynamic bundling

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));
const AppLayout = () => {
  //authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make an API call and send username and pswd
    const data = {
      name: "Shilpi Verma",
    };
    setUserName(data.name);
  }, []);

  //change the default useerContext value to the value we got from useEffect

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "verma", setUserName }}>
            <Header />
          </UserContext.Provider>

          {/* Body should be only for path "/" */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      { path: "/cart", element: <Cart /> },

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
