import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import AppName from "./components/AppName";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (item) => {
    if (item === "C") {
      setCalVal("");
    } else if (item === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + item;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <AppName></AppName>
      <Display displayValue={calVal}></Display>
      {/* <Buttons
        values={values}
        handelOnKeyDown={() => handelOnKeyDown(event)}
      ></Buttons> */}
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
