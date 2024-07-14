import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Projects from "./components/ProjectList";
import Footer from "./components/Footer";
import { useState } from "react";
import Overview from "./components/Overview";
import Career from "./components/Career";
import ContactMe from "./components/ContectMe";
import ProjectList from "./components/ProjectList";
import MyProjectProvider from "./store/my-projects-store";
import MyWorkProvider from "./store/work-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const renderContent = (selectedTab) => {
    if (selectedTab === "PROJECTS") {
      return <ProjectList />;
    } else if (selectedTab === "CAREER") {
      return (
        <MyWorkProvider>
          <Career />
        </MyWorkProvider>
      );
    } else if (selectedTab === "CONTACT_ME") {
      return <ContactMe />;
    } else {
      return <Overview />;
    }
  };
  return (
    <>
      <MyProjectProvider>
        <div className="home">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Header>

          {renderContent(selectedTab)}

          <Footer></Footer>
        </div>
      </MyProjectProvider>
    </>
  );
}

export default App;
