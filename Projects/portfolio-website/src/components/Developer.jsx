import { motion } from "framer-motion";
// import awsLogo from "../assets/skillsLogo/awsLogo.png";
// import cssLogo from "../assets/skillsLogo/cssLogo.png";
// import htmlLogo from "../assets/skillsLogo/htmlLogo.png";
// import mysqlLogo from "../assets/skillsLogo/mysqlLogo.png";
const Developer = () => {
  return (
    // <div
    //   className="container text-center"
    //   style={{ marginTop: "100px", width: "80%" }}
    // >
    //   <div className="row">
    //     <div className="col">
    //       <div className="col">col-6</div>
    //       <div className="col">col-3</div>
    //       <div className="col">col-3</div>
    //     </div>
    //     <div className="col">
    //       <div className="col-8">col-8</div>
    //       <div className="col-4">col-4</div>
    //     </div>
    //   </div>
    // </div>
    <div className="developer" style={{ margin: "100px 100px" }}>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileHover={{
          // rotate: "2deg",
          scale: 1.05,
        }}
      >
        <img src={"awsLogo"} className="card-img-top" alt="..." />
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileHover={{
          // rotate: "2deg",
          scale: 1.2,
        }}
      >
        <img src={"cssLogo"} className="card-img-top" alt="..." />
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileHover={{
          // rotate: "2deg",
          scale: 1.05,
        }}
      >
        <img src={"htmlLogo"} className="card-img-top" alt="..." />
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileHover={{
          // rotate: "2deg",
          scale: 1.05,
        }}
      >
        <img src={"mysqlLogo"} className="card-img-top" alt="..." />
      </motion.div>
    </div>
  );
};
export default Developer;
