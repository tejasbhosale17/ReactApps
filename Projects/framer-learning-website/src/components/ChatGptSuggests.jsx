// import { useState } from "react";
// import { motion } from "framer-motion";
import profileImg from "../assets/2face/profileImg1.png";
import firstImg from "../assets/2face/firstImg.png";
import finalFaceImg from "../assets/2face/fullFaceImg .png";
import designerBg from "../assets/2face/designer-bg.jpeg";
import coderbg from "../assets/2face/coder-bg.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ChatGptSuggests = () => {
  const [mouseX, setMouseX] = useState(0);
  const [relMouseX, setRelMouseX] = useState(520);
  const [xp, setXp] = useState(520);
  const frameRate = 30;
  const timeInterval = Math.round(1000 / frameRate);

  useEffect(() => {
    const interval = setInterval(() => {
      setXp((prevXp) => prevXp + (relMouseX - prevXp) / 12);
    }, timeInterval);

    return () => clearInterval(interval);
  }, [relMouseX, timeInterval]);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX);
    const faceOffsetLeft = document.getElementById("face").offsetLeft;
    setRelMouseX(mouseX - faceOffsetLeft);
  };

  const handleMouseEnter = () => {
    document
      .getElementById("section")
      .addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    document
      .getElementById("section")
      .removeEventListener("mousemove", handleMouseMove);
    setXp(520);
    setMouseX(0);
    setRelMouseX(520);
  };

  return (
    <div
      id="section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        id="face"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <motion.img
          id="designer-img"
          src={profileImg} // replace with actual image source
          alt="Designer"
          style={{ position: "absolute", left: 100, width: 420 }}
          animate={{
            width: 420 + (520 - xp) * 0.5,
            left: 100 + (520 - xp) * 0.1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <motion.img
          id="coder-img"
          src={firstImg} // replace with actual image source
          alt="Coder"
          style={{ position: "absolute", right: 100, width: 420 }}
          animate={{
            width: 420 + (xp - 520) * 0.5,
            right: 100 - (520 - xp) * 0.1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <motion.div
          id="designer-bg"
          style={{ position: "absolute", left: 100, opacity: 1 }}
          animate={{
            left: 100 + (520 - xp) * 0.05,
            opacity: (1040 - xp) / 520,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <motion.div
          id="coder-bg"
          style={{ position: "absolute", right: 100, opacity: 1 }}
          animate={{
            right: 100 + (xp - 520) * 0.05,
            opacity: xp / 520,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <motion.div
          id="designer-desc"
          style={{ position: "absolute", opacity: 1 }}
          animate={{
            opacity: (1040 - xp) / 520,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          Designer Description
        </motion.div>
        <motion.div
          id="coder-desc"
          style={{ position: "absolute", opacity: 1 }}
          animate={{
            opacity: xp / 520,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          Coder Description
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatGptSuggests;
