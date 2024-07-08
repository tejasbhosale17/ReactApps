import styles from "./buttons.module.css";
import Button from "./Button";
import { useState } from "react";

const Buttons = ({ onButtonClick }) => {
  //console.log(values);
  // let [activeItems, setActiveItems] = useState([]);
  let values = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  // const handelOnKeyDown = (event) => {
  //   let enteredValue = event.target.value;
  //   console.log(enteredValue);
  // };

  // let onClickButton = (item, event) => {
  //   let newItems = [...activeItems, item];
  //   setActiveItems(newItems);
  //   console.log(newItems);
  // };

  return (
    <div className={styles.buttonsContainer}>
      {values.map((item) => (
        // <Button key={item} item={item} onClick={onButtonClick}></Button>
        <button
          key={item}
          className={styles.buttons}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
