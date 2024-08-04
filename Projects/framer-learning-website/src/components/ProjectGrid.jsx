import { motion, spring } from "framer-motion";
import "./projectGrid.min.css";
import img1 from "../assets/gridImg/img1 .jpeg";
import img2 from "../assets/gridImg/img9.jpg";
import img3 from "../assets/gridImg/img3.png";
import img4 from "../assets/gridImg/img7.jpg";
import img5 from "../assets/gridImg/img4.jpg";
import img6 from "../assets/gridImg/img8.jpg";
import img7 from "../assets/gridImg/img2.jpg";
import img8 from "../assets/gridImg/img6.jpg";
import img9 from "../assets/gridImg/img5.jpg";
import { useState } from "react";
// const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const ProjectGrid = () => {
  // const [showCard, setShowCard] = useState(false);

  return (
    <div className="projectGrid">
      <div className="container">
        {/* <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            layout: {
              duration: 1,
              type: spring,
            },
          }}
          layout
          onClick={() => setShowCard(!showCard)}
        >
          {!showCard && (
            <motion.div>
              <img src={img8} />
            </motion.div>
          )}
          {showCard && (
            <motion.div
              style={{ background:""}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 250, y: 250, scale: 3 }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img src="..." className="card-img-top" alt="..." />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus exercitationem magnam aspernatur iste non
                    consequatur
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div> */}
        {/* ----------------------------------------------------------------------------------- */}
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img1} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img2} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img4} />
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img3} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img9} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img5} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img6} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={img7} />
        </motion.div>
      </div>
    </div>
  );
};
export default ProjectGrid;

{
  /* <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div className={`grid-item`} key={index}>
              <img src={image.img} />
            </div>
          ))}
        </Masonry> */
}
