import styles from "./display.module.css";
const Display = ({ displayValue }) => {
  return (
    <>
      <input
        className={styles.display}
        type="text"
        value={displayValue}
      ></input>
    </>
  );
};
export default Display;
