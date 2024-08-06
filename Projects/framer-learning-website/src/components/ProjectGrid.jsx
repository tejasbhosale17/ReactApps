import { easeInOut, AnimatePresence, motion, spring } from "framer-motion";
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
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="projectGrid">
      <div className="container">
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          transition={{
            ease: "easeIn",
            duration: 0.22,
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
              style={{ width: "600px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 210, y: 150, scale: 2 }}
              transition={{
                ease: "easeIn",
                duration: 0.22,
              }}
            >
              <div className="card">
                <div className="card-body" style={{ display: "flex" }}>
                  <img
                    src={img3}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "50%" }}
                  />
                  <p className="card-text" style={{ padding: "2px 20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus exercitationem magnam aspernatur iste non
                    consequatur
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        {/* ----------------------------------------------------------------------------------- */}
        {/* 
        <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-body-secondary">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg> 
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div> */}
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
