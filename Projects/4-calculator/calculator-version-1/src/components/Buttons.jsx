import styles from "./buttons.module.css";
import Button from "./Button";
import { useState } from "react";

const Buttons = ({ values, handelOnKeyDown }) => {
  //console.log(values);
  let [activeItems, setActiveItems] = useState([]);

  let onClickButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    console.log(newItems);
  };

  return (
    <div className={styles.buttonsContainer}>
      {values.map((item) => (
        <Button
          key={item}
          item={item}
          onClickButton={() => onClickButton(item, event)}
        ></Button>
      ))}
    </div>
  );
};
export default Buttons;
