import { useRef, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/2faceImg/newImages/profileImg1.png";
import firstImg from "../../assets/2faceImg/newImages/firstImg.png";
const Framer2Face = () => {
  const [direction, setDirection] = useState(null);
  const facesRef = useRef(null);
  const prevXRef = useRef(0);

  const handleMouseMove = (event) => {
    const currentX = event.pageX;
    if (prevXRef.current < currentX) {
      setDirection("right");
    } else if (prevXRef.current > currentX) {
      setDirection("left");
    }
    prevXRef.current = currentX;
  };
  return (
    <div
      className="faces-container"
      onMouseMove={handleMouseMove}
      ref={facesRef}
    >
      <motion.div
        className="face"
        animate={{
          x: direction === "left" ? 40 : -40,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <div id="face1" className="face-content">
          <img src={profileImg} />
        </div>
        {/* <div className="face"> */}
        <div id="face2" className="face-content">
          <img src={firstImg} />
        </div>
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Framer2Face;
