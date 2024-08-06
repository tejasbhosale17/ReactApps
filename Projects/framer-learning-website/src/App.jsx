import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Face2 from "./components/2Face/Face2";
import ChatGptSuggests from "./components/ChatGptSuggests";
import ImgToCard from "./components/ImgToCard";

function App() {
  return (
    <>
      <div className="home">
        {/* <Header /> */}
        {/* <ScrollProgress /> */}
        {/* <Framer2Face /> */}
        {/* <Coder /> */}
        {/* <Home /> */}
        <Face2 />
        {/* <ImgToCard /> */}
        <ProjectGrid />
        {/* <ChatGptSuggests /> */}
        {/* <Developer /> */}
        {/* <Outlet /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
