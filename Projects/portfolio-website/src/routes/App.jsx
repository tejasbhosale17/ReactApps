import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyProjectProvider from "../store/my-projects-store";
import { Outlet } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";
import Framer2Face from "../components/2face/Framer2Face";
import Coder from "../components/Coder";
import Developer from "../components/Developer";
import ProjectGrid from "../components/ImageGrids/ProjectGrid";
import About from "../components/About";
function App() {
  return (
    <>
      <MyProjectProvider>
        <div className="home">
          <Header />
          {/* <ScrollProgress /> */}
          {/* <Framer2Face /> */}
          {/* <Coder /> */}
          {/* <ProjectGrid /> */}
          {/* <Developer /> */}
          {/* <Outlet /> */}
          <About />
          <Footer />
        </div>
      </MyProjectProvider>
    </>
  );
}

export default App;
