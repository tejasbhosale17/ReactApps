import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";
function App() {
  // let foodItems = ["Avacados", "Fruits", "Green Vegetables", "Milk", "Sprouts"];

  let [foodItems, setFoodItems] = useState([
    // "Avacados",
    // "Fruits",
    // "Green Vegetables",
  ]);

  // let textStateArr = useState("Food Item entered by u");
  // let textToShow = textStateArr[0];
  // let setTextToShow = textStateArr[1];

  let [textToShow, setTextToShow] = useState("");

  // console.log(`Current value of textState: ${textToShow}`);

  const handelOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(newFoodItem);
    }
    // console.log(event);
    setTextToShow(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food </h1>

        <FoodInput handelOnKeyDown={handelOnKeyDown}></FoodInput>
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
