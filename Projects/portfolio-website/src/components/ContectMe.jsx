import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "../components/styles/contactMe.min.css";
const ContactMe = () => {
  return (
    <>
      <div className="contact-me" style={{ marginTop: "160px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9585211842045!2d73.75880550987303!3d18.5970291423897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b965f492bb23%3A0x57632cd63b2ce6bc!2sPRISTINE%20PROLIFE-3%2C%20Shankar%20Kalat%20Nagar%2C%20Wakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1722336247282!5m2!1sen!2sin"
          style={{
            width: "90%",
            height: "250px",
            marginLeft: "100px",
            borderBottom: "inset",
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
      {/* //---------------------------------------------------------------------------------------------------------------------------- */}
      <div
        className="contect-me-social"
        style={{ backgroundColor: "white", borderBottom: "inset" }}
      >
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div
              id="text-main"
              className="col-6"
              style={{ visibility: "visible", right: "0%", opacity: "1" }}
            >
              <h1
                style={{
                  marginBottom: "0.8rem",
                  lineHeight: "1.2",
                  letterSpacing: "-0.06rem",
                  fontSize: "6rem",
                }}
              >
                contact.
              </h1>
              <p
                className="intro"
                style={{
                  fontSize: "1.6rem",
                  color: "#757575",
                  lineHeight: "1.3",
                  marginBottom: "2.4rem",
                }}
              >
                Get in touch with me via social media or email.
              </p>

              <ul
                className="social-disc"
                style={{ listStyleType: "none", paddingTop: "3.2rem" }}
              >
                <li>
                  <a
                    href="https://x.com/TejasBh02928208?t=q-_hPpYYfBG2SsmdCiW-pg&s=08 "
                    target="_blank"
                    className="twitter"
                    style={{ color: "#189ACD" }}
                  >
                    <AiFillTwitterCircle
                      style={{
                        backgroundPosition: "0px -598px",
                        height: "5rem",
                        width: "5rem",
                      }}
                    />{" "}
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="facebook"
                    style={{ color: "#43609c" }}
                  >
                    <FaFacebook
                      style={{
                        backgroundPosition: "0px -547px",

                        height: "5rem",
                        width: "5rem",
                      }}
                    />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tejas-bhosale-195871159/"
                    target="_blank"
                    className="linkedin"
                    style={{ color: "#0982c0" }}
                  >
                    <FaLinkedin
                      style={{
                        backgroundPosition: "0px -700px",

                        height: "5rem",
                        width: "5rem",
                      }}
                    />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tejasbhosale17"
                    target="_blank"
                    className="github"
                    style={{ color: "#2b3137" }}
                  >
                    <FaGithub
                      style={{
                        backgroundPosition: "0px -751px",

                        height: "5rem",
                        width: "5rem",
                      }}
                    />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* //----------------------------------------------------------------------------------------------------------------------- */}

            <div className="col-md-10 mx-auto col-lg-6">
              <div
                className="container"
                style={{
                  fontFamily:
                    "proxima nova light, Helvetica Neue, Helvetica, Arial, Sans-serif",
                }}
              >
                <div className="contact-form">
                  <h1>Send me an email</h1>
                  <form action="https://formspree.io/f/xwpeopzn" method="POST">
                    <div className="mb-3">
                      <label htmlFor="exampleInputName" className="form-label">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="nameHelp"
                        placeholder="enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputMessage"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        type="text"
                        className="form-control"
                        id="exampleInputMessage"
                        placeholder="enter messege here"
                      />
                    </div>
                    <button
                      type="submit"
                      value="send"
                      className="btn "
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#333333",
                        fontFamily:
                          "proxima nova semibold, Helvetica Neue, Helvetica, Arial, Sans-serif",
                        float: "right",
                      }}
                    >
                      Send Email
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactMe;
