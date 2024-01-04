import styles from "./foodInput.module.css";
const FoodInput = () => {
  const handelOnChange = (event) => {
    console.log(event.target.value);
  };

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
