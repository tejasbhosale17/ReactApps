import styles from "./foodInput.module.css";
const FoodInput = ({ handelOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item"
      className={styles.foodInput}
      onChange={handelOnChange}
    ></input>
  );
};
export default FoodInput;
