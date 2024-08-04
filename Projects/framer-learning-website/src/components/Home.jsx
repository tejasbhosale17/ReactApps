import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      style={{ marginTop: "200px" }}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      This is the home page.
    </motion.div>
  );
};
export default Home;
