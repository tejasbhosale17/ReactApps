import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";
function App() {
  let foodItems = ["Avacados", "Fruits", "Green Vegetables", "Milk", "Sprouts"];

  // let textStateArr = useState("Food Item entered by u");
  // let textToShow = textStateArr[0];
  // let setTextToShow = textStateArr[1];

  let [textToShow, setTextToShow] = useState("Food Item entered by u");

  // console.log(`Current value of textState: ${textToShow}`);

  const handelOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food </h1>

        <FoodInput handelOnChange={handelOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems FoodItems={foodItems}></FoodItems>
        <ErrorMessage FoodItems={foodItems}></ErrorMessage>
      </Container>
      {/* <Container>
        <p>Above is the List of healthy FoodItems</p>
      </Container> */}
    </>
  );
}

export default App;
