import homeBgImg from "../assets/homebg.png";
import "./overview.min.css";
import { SiMysql } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoAws } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { DiJenkins } from "react-icons/di";
import Face2 from "./Face2";
import ProjectGrid from "./ImageGrids/ProjectGrid";
const Overview = () => {
  return (
    <div className="overview-page">
      <Face2 />
      <ProjectGrid />
      {/* <div className="container col-xxl-8 px-4 py-5  overview "> */}
      {/* <section>
          <div
            className="row flex-lg-row-reverse align-items-center g-5 py-5 light"
            style={{
              marginTop: "inherit",
              borderBottom: "1px solid #66666636",
            }}
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
                Java Developer, Frontend Developer, Certified AWS Solution
                Architech
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
        </section> */}
      <div>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-body-emphasis">
            Technical skills
          </h1>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <BiLogoJava
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "#5382a1",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">Java</p>
                    </div>
                  </div>
                </div>

                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <FaReact
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "aqua",
                      }}
                    />

                    <div className="card-body skill-name">
                      <p className="card-text">React</p>
                    </div>
                  </div>
                </div>

                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <BiLogoSpringBoot
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "forestgreen",
                      }}
                    />

                    <div className="card-body skill-name">
                      <p className="card-text">Spring Boot</p>
                    </div>
                  </div>
                </div>
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <SiMysql
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "#00758f",
                      }}
                    />

                    <div className="card-body skill-name">
                      <p className="card-text">MySQL</p>
                    </div>
                  </div>
                </div>
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <BiLogoAws
                      style={{
                        height: "150px",
                        width: "100%",
                        backgroundColor: "#131A22",
                        color: "aliceblue",
                      }}
                    />

                    <div className="card-body skill-name">
                      <p className="card-text">AWS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <TiHtml5
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "#f06529",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">HTML</p>
                    </div>
                  </div>
                </div>
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <FaCss3Alt
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "#2965f1",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">CSS</p>
                    </div>
                  </div>
                </div>

                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <RiJavascriptFill
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "#f0db4f",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">JavaScript</p>
                    </div>
                  </div>
                </div>
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <TbBrandCpp
                      style={{
                        height: "150px",
                        width: "100%",
                        color: "#0057B8",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">C++</p>
                    </div>
                  </div>
                </div>

                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <FcLinux
                      style={{
                        height: "150px",
                        width: "100%",
                        // color: "#0057B8",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">Linux</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <IoLogoGithub
                      style={{
                        height: "150px",
                        width: "100%",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">GitHub</p>
                    </div>
                  </div>
                </div>
                <div className="col skill-cols">
                  <div
                    className="card shadow-sm skill-card"
                    style={{
                      fontSize: "larger",
                    }}
                  >
                    <DiJenkins
                      style={{
                        height: "150px",
                        width: "100%",
                      }}
                    />
                    <div className="card-body skill-name">
                      <p className="card-text">Jenkins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Overview;
