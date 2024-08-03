import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "./components/Overview.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Career from "./components/Career.jsx";
import ContactMe from "./components/ContectMe.jsx";
import MyWorkProvider from "./store/work-list-store.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Overview /> },
      {
        path: "/project",
        element: <ProjectList />,
      },
      {
        path: "/career",
        element: (
          // <MyWorkProvider>
          //   <Career />
          // </MyWorkProvider>
          <ScrollProgress />
        ),
      },
      {
        path: "/contactme",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
