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
      <Projects />;
    } else if (selectedTab === "CAREER") {
      <Career />;
    } else if (selectedTab === "CONTACT_ME") {
      <ContactMe />;
    }
  };
  return (
    <>
      <MyProjectProvider>
        {/* <div>Placeholder</div> */}
        <div className="Home">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            renderContent={renderContent()}
          ></Header>

          <Overview />
          <ProjectList />
          <MyWorkProvider>
            <Career />
          </MyWorkProvider>
          <ContactMe />
          <Footer></Footer>
        </div>
      </MyProjectProvider>
    </>
  );
}

export default App;
