import Career from "./Career";
import ContactMe from "./ContectMe";
import Overview from "./Overview";
import Projects from "./ProjectList";

/* eslint-disable react/prop-types */
const Header = ({ selectedTab, setSelectedTab, renderContent }) => {
  return (
    <header className="p-3 mb-3 border-bottom">
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
              onClick={() => {
                <Overview />;
                // setSelectedTab("HOME");
                // renderContent(selectedTab);
              }}
            >
              <a href="#" className="nav-link px-2 link-secondary">
                Overview
              </a>
            </li>
            <li
              onClick={() => {
                <Projects />;
                // setSelectedTab("PROJECTS");
                // renderContent(selectedTab);
              }}
            >
              <a href="#" className="nav-link px-2 link-body-emphasis">
                Projects
              </a>
            </li>
            <li
              onClick={() => {
                <Career />;
                // setSelectedTab("CAREER");
                // renderContent(selectedTab);
              }}
            >
              <a href="#" className="nav-link px-2 link-body-emphasis">
                Career
              </a>
            </li>
            <li
              onClick={() => {
                <ContactMe />;
                // setSelectedTab("CONTACT_ME");
                // renderContent(selectedTab);
              }}
            >
              <a href="#" className="nav-link px-2 link-body-emphasis">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../assets/passport.jpg"
                alt="mdo"
                width="100"
                height="100"
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
