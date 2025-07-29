import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { logo, restImage } from "./Utils/constant";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
// import GroceryShop from "./Component/GroceryShop";

// Lazy loading and dynamic importing
const GroceryShop = lazy(() => import("./Component/GroceryShop"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header logo={logo} />

      {/** 
        1. if path = "/" 
          <Body />

        2. if path = "/about"
          <About />

        3. if path = "/contact"
          <Contact /> 
      */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body restImage={restImage} />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/groceryshop",
        element: (
          <Suspense fallback={<h1>Wait for sometimes! Page is loading......</h1>}>
            <GroceryShop />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
