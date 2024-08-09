import "./qualifications.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
const Qualifications = () => {
  return (
    <section className="qualification-section">
      <h2 className="secton-title">Qualification</h2>
      <p className="section-subtitle">My Personal Journey</p>
      <div className="qualification-container container">
        <div className="qualifiaction-tabs">
          <div className="qualification-button qualification-active button--flex">
            <IoSchoolSharp style={{ fontSize: "1.8rem", marginRight: "2px" }} />{" "}
            Education -{"   "}
            <FaBriefcase style={{ fontSize: "1.8rem", marginRight: "10px" }} />
            Experience
          </div>
        </div>
        <div className="qualifiaction-sections">
          <div className="qualification_content qualification_content-active">
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">10th</h3>
                <span className="qualification-subtitle">
                  Cambridge HighSchool Nanded
                </span>
                <div className="qualification-calender">
                  <SlCalender /> 2014 - 2015
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div></div>

              {/* <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div> */}
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">12th</h3>
                <span className="qualification-subtitle">
                  Cambridge Junior College Nanded
                </span>
                <div className="qualification-calender">
                  <SlCalender /> 2015 - 2017
                </div>
              </div>
              {/* <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div> */}
            </div>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">B.Tech</h3>
                <span className="qualification-subtitle">
                  Vishwakarma Institute of Information Technology Pune
                </span>
                <div className="qualification-calender">
                  <SlCalender /> 2017 - 2021
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div></div>

              {/* <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div> */}
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">UI Developer</h3>
                <span className="qualification-subtitle">CodeGurukul Pune</span>
                <div className="qualification-calender">
                  <SlCalender /> Jan 2021 - May 2021
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Post graduation Diploma in Advanced Computing
                </h3>
                <span className="qualification-subtitle">CDAC bangalore</span>
                <div className="qualification-calender">
                  <SlCalender /> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div></div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Java Developer</h3>
                <span className="qualification-subtitle">
                  Sunbeam Infotech Pune
                </span>
                <div className="qualification-calender">
                  <SlCalender /> Jun 2023 - July 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
