import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import AppName from "./components/AppName";
function App() {
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
  return (
    <div className={styles.calculator}>
      <AppName></AppName>
      <Display></Display>
      <Buttons values={values}></Buttons>
    </div>
  );
}

export default App;
