import styles from "./buttons.module.css";
import Button from "./Button";
const Buttons = ({ values }) => {
  console.log(values);
  return (
    <div className={styles.buttonsContainer}>
      {values.map((item) => (
        <Button key={item} item={item}></Button>
      ))}
    </div>
  );
};
export default Buttons;
