import styles from "./foodInput.module.css";
const FoodInput = ({ handelOnKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item"
      className={styles.foodInput}
      onKeyDown={handelOnKeyDown}
    ></input>
  );
};
export default FoodInput;
