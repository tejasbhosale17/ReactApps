import profileImg from "../assets/2faceImg/newImages/firstImg.png";
import "./styles/about.min.css";
import skillPiChartImg from "../assets/skill-piChart.png";
import Qualifications from "./qualifications/Qualifications";
const About = () => {
  return (
    <div className="about">
      <section className="intro" style={{ backgroundColor: "white" }}>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={profileImg}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 desc-intro">
              <h1 className="display-5 lh-1 mb-3">about.</h1>
              <p className="intro-heading">
                I'm a Computer Engineer based in pune Maharashtra, India.{" "}
              </p>
              <p className="description">
                Since 2017, I've enjoyed working on various projects. When I'm
                not in front of a screen, you'll find me cooking, traveling or
                working out in the gym.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skill-chart">
        <div className="tech-skills">
          <div className="row">
            <div className="col-12 pie-chart">
              <div className="developer">
                <h2>Developer</h2>
                <ul>
                  <li>ReactJs</li>
                  <li>SpringBoot</li>
                  <li>AWS</li>
                  <li>Linux</li>
                  <li>Git/GitHub</li>
                </ul>
              </div>
              <div className="chart">
                <img src={skillPiChartImg} style={{ width: "400px" }} />
              </div>
              <div className="coder">
                <h2>Coder</h2>
                <ul>
                  <li>Java</li>
                  <li>C++</li>
                  <li>MySQL</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Qualifications />
    </div>
  );
};
export default About;
