import { useState } from "react";
// import img1 from "../assets/gridImg/img1 .jpeg";
import img2 from "../assets/gridImg/img9.jpg";
// import img3 from "../assets/gridImg/img3.png";
import img4 from "../assets/gridImg/img7.jpg";
// import img9 from "../assets/gridImg/img5.jpg";

import { motion, AnimatePresence } from "framer-motion";
// import img1 from "../assets/gridImg/img4.jpg";
import "../styles/imgToCrad.css";
import travel from "../assets/gridImg/img3.png"; // Tell webpack this JS file uses this image

export default function ImgToCard() {
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  return (
    <div className="ImgGrid">
      <div className="container">
        <div className="card-wrapper">
          <AnimatePresence>
            {!showImg1 && (
              <motion.img
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowImg1(!showImg1)}
                src={travel}
                style={{ width: "500px" }}
              />
            )}
            {showImg1 && (
              <motion.div
                exit={{
                  y: -20,
                  opacity: 0,
                  filter: "blur(5px)",
                  transition: { ease: "easeIn", duration: 0.22 },
                }}
                initial={{ opacity: 0, y: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { type: "easeIn", duration: 0.22 },
                }}
                className="card"
                onClick={() => setShowImg1(!showImg1)}
              >
                {/* <h2>Ready?</h2> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia deserunt cumque minus eos eaque ullam atque deleniti,
                  doloremque reprehenderit dolores odit expedita non facilis
                  dicta iure, error at sunt dignissimos?{" "}
                </p>
                <img src={travel} alt="Bridge and river" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* --------------------------------------------------------- */}
        <div className="card-wrapper">
          <AnimatePresence>
            {!showImg2 && (
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={img2}
                onClick={() => setShowImg2(!showImg2)}
                style={{ width: "500px" }}
              />
            )}
            {showImg2 && (
              <motion.div
                exit={{
                  y: -20,
                  opacity: 0,
                  filter: "blur(5px)",
                  transition: { ease: "easeIn", duration: 0.22 },
                }}
                initial={{ opacity: 0, y: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { type: "easeIn", duration: 0.22 },
                }}
                className="card"
                onClick={() => setShowImg2(!showImg2)}
              >
                <h2>Ready?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia deserunt cumque minus eos eaque ullam atque deleniti,
                  doloremque reprehenderit dolores odit expedita non facilis
                  dicta iure, error at sunt dignissimos?{" "}
                </p>
                <img src={travel} alt="Bridge and river" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/*---------------------------------------------------------
        
        <div className="card-wrapper">
        <AnimatePresence>
          {!show && (
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={img4}
              onClick={() => setShow(!show)}
              style={{ width: "500px" }}
            />
          )}
          {show && (
            <motion.div
              exit={{
                y: -20,
                opacity: 0,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 0.22 },
              }}
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { type: "easeIn", duration: 0.22 },
              }}
              className="card"
              onClick={() => setShow(!show)}
            >
              <h2>Ready?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deserunt cumque minus eos eaque ullam atque deleniti,
                doloremque reprehenderit dolores odit expedita non facilis dicta
                iure, error at sunt dignissimos?{" "}
              </p>
              <img src={travel} alt="Bridge and river" />
            </motion.div>
          )}
        </AnimatePresence>
        </div> 
        ---------------------------------------------------------*/}
      </div>
    </div>
  );
}
