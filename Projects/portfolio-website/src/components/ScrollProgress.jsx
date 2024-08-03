/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "../components/styles/scrollProgress.css";
import codeGurukulImg from "../assets/work1.jpg";
import sunbeamImg from "../assets/work2.jpeg";
import amazonImg from "../assets/skillsLogo/reactLogo.png";

const items = [
  {
    id: "1",
    title: "UI Developer",
    companey: "CodeGurukul",
    imgLink: codeGurukulImg,
    description:
      "• Increased Google ranking of the website by 87% using SEO and Requirements Analysis and working collaboratively with backend and frontend teams. • Developed login page of the website and execute Operations assigned. • Technology: Search Engine Optimization (SEO), HTML, CSS3, Bootstrap, JavaScript.",
    projectDemo: "www.linked.com",
  },
  {
    id: "2",
    title: "Core Java Developer",
    companey: "Sunbeam Infotech Pune",
    imgLink: sunbeamImg,
    description:
      "• My Task involves the Development of an application for the Vehicle Servicing Center using Java JDBC. • The Purpose of this application is to store customers, vehicles, services data and also keep track of available parts, and generate the bill amount according to the respective.",
    projectDemo: "www.leetcode.com",
  },
  {
    id: "3",
    title: "React Developer",
    companey: "Amazon Inc",
    imgLink: amazonImg,
    description:
      "fkavbkkabn fbaifnbafua nb afbunsbfuba ahuifaniuytfrfewsrt wetryuihjobv rd6f7gy8b vtrd 6f57gy8hu inyt res5 465f7gy8hu rde5 67gyrd ft gyhiufdr 6rft7g y8huji nbves5678 ghunhutdr6ft7g y8huojnhbvc xcvbnm ghnbvc fghjnbv cx vfubhnojln",
    projectDemo: "www.amazon.com",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container single-item">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.imgLink} className="item-image" alt="item Image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 className="item-title">{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ScrollProgress = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="work-main">
      <div className="portfolio" ref={ref} style={{ marginTop: "100px" }}>
        <div className="my-progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        <div className="container work-items">
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
