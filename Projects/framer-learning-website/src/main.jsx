import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
// import Overview from "./components/Overview.jsx";
// import ProjectList from "./components/ProjectList.jsx";
// import ContactMe from "./components/ContectMe.jsx";
// import ScrollProgress from "./components/ScrollProgress.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <Overview /> },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   path: "/career",
      //   element: <ScrollProgress />,
      // },
      // {
      //   path: "/contactme",
      //   element: <ContactMe />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
