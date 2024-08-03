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
import ImgGrid from "../components/ImageGrids/ImgGrid";
function App() {
  return (
    <>
      <MyProjectProvider>
        <div className="home">
          <Header />
          {/* <ScrollProgress /> */}
          {/* <Framer2Face /> */}
          {/* <Coder /> */}
          <ImgGrid />
          {/* <Developer /> */}
          {/* <Outlet /> */}
          <Footer />
        </div>
      </MyProjectProvider>
    </>
  );
}

export default App;
