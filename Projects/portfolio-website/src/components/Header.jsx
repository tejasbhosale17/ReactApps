import Career from "./Career";
import ContactMe from "./ContectMe";
import Overview from "./Overview";
import Projects from "./ProjectList";
import passportImg from "../assets/passport.jpg";
import { FaGithub } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Header = ({ selectedTab, setSelectedTab, renderContent }) => {
  return (
    <header className="p-3 mb-3 border-bottom header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li
              className="nav-text"
              onClick={() => {
                setSelectedTab("HOME");
              }}
            >
              <a href="#" className="nav-link px-2 " style={{ color: "white" }}>
                Overview
              </a>
            </li>
            <li
              className="nav-text"
              onClick={() => {
                setSelectedTab("PROJECTS");
              }}
            >
              <a href="#" className="nav-link px-2" style={{ color: "white" }}>
                Projects
              </a>
            </li>
            <li
              className="nav-text"
              onClick={() => {
                setSelectedTab("CAREER");
              }}
            >
              <a href="#" className="nav-link px-2" style={{ color: "white" }}>
                Career
              </a>
            </li>
            <li
              className="nav-text"
              onClick={() => {
                setSelectedTab("CONTACT_ME");
              }}
            >
              <a href="#" className="nav-link px-2" style={{ color: "white" }}>
                Contact Me
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/tejasbhosale17"
                title="Follow me on LinkedIn"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
          <div>
            <a href="#" className="d-block link-body-emphasis text-end">
              <img
                src={passportImg}
                alt="mdo"
                width="50px"
                height="50px"
                className="rounded-circle"
              ></img>
            </a>
          </div>

          {/* <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={passportImg}
                alt="mdo"
                width="50px"
                height="50px"
                className="rounded-circle"
              ></img>
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
