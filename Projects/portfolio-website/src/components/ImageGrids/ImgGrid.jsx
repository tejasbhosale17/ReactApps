import "./imgGrid.min.css";
import { motion } from "framer-motion";
import awsLogo from "../../assets/skillsLogo/awsLogo.png";
import cssLogo from "../../assets/skillsLogo/cssLogo.png";
import htmlLogo from "../../assets/skillsLogo/htmlLogo.png";
import mysqlLogo from "../../assets/skillsLogo/mysqlLogo.png";

const ImgGrid = () => {
  return (
    <div className="imgGrid">
      <div className="grid-container">
        <motion.div
          className="grid-item larger"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={awsLogo} alt="Image 1" />
        </motion.div>
        <motion.div
          className="grid-item "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={cssLogo} alt="Image 2" />
        </motion.div>
        <motion.div
          className="grid-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={htmlLogo} alt="Image 3 larger" />
        </motion.div>
        <motion.div
          className="grid-item larger"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={mysqlLogo} alt="Image 4 larger" />
        </motion.div>
        <motion.div
          className="grid-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={awsLogo} alt="Image 1" />
        </motion.div>
        <motion.div
          className="grid-item larger"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={cssLogo} alt="Image 2 larger" />
        </motion.div>
        <motion.div
          className="grid-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={htmlLogo} alt="Image 3" />
        </motion.div>
        <motion.div
          className="grid-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={mysqlLogo} alt="Image larger" />
        </motion.div>
      </div>
    </div>
  );
};
export default ImgGrid;
