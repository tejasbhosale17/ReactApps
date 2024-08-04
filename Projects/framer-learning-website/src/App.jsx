import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import ImgGrid from "./components/ImgGrid/ImgGrid";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="home">
        <Header />
        {/* <ScrollProgress /> */}
        {/* <Framer2Face /> */}
        {/* <Coder /> */}
        {/* <Home /> */}
        <ProjectGrid />
        {/* <Developer /> */}
        {/* <Outlet /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
