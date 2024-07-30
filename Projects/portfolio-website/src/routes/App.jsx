import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyProjectProvider from "../store/my-projects-store";
import { Outlet } from "react-router-dom";
import Face2 from "../components/Face2";
function App() {
  return (
    <>
      <MyProjectProvider>
        <div className="home">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </MyProjectProvider>
    </>
  );
}

export default App;
