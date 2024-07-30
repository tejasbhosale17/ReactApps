import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © www.tejasportfolio.com
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <SiLeetcode />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <FaLinkedin />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <BiLogoGmail />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <FaGithub />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
