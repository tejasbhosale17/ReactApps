import homeBgImg from "../assets/homebg.png";
import { FaJava } from "react-icons/fa6";
const Overview = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5  overview ">
      <div
        className="row flex-lg-row-reverse align-items-center g-5 py-5 "
        style={{ marginTop: "inherit", borderBottom: "1px solid #66666636" }}
      >
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={homeBgImg}
            className="d-block mx-lg-auto img-fluid"
            alt="Home bg Image"
            style={{ width: "700", height: "500", loading: "lazy" }}
          />
        </div>
        <div className="col-lg-6">
          <div className="overview-intro-text" style={{ display: "flex" }}>
            <h4
              className="display"
              style={{
                BiFontFamily: "Garamond, serif",
                marginTop: "16px",
                marginRight: "6px",
              }}
            >
              I’M
            </h4>
            <h1> </h1>
            <h1 className="display" style={{ color: "#5E7084" }}>
              Tejas Bhosale
            </h1>
          </div>
          <p
            className="lead"
            style={{
              BiFontFamily: "monospace",
              fontWeight: "600",
            }}
          >
            Java Developer, Frontend Developer, Certified AWS Solution Architech
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Download Resume
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              style={{ backgroundColor: "currentcolor" }}
            >
              <a
                href="https://www.linkedin.com/in/tejas-bhosale-195871159/"
                style={{ color: "#111", textDecoration: "none" }}
              >
                Visit LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-body-emphasis">
            Technical skills
          </h1>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <FaJava />
                    <div className="card-body">
                      <p className="card-text">Skill</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">Skill</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">Skill</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
