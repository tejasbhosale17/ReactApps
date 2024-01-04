import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
function App() {
  let foodItems = [
    "Avacados",
    "Fruits",
    "Green Vegetables",
    "Milk",
    "Sprouts",
    "Dal",
    "Ghee",
    "Almonds",
  ];
  //First Method
  // if (FoodItems.length === 0) {
  //   return <h2>I am still Hungry</h2>;
  // }
  return (
    <React.Fragment>
      <h1 className="food-heading">Halthy Food Items </h1>
      {/*Second Method 
      {FoodItems.length === 0 ? <h2>I am Still Hungry</h2> : null} */}

      <FoodItems FoodItems={foodItems}></FoodItems>
      <ErrorMessage FoodItems={foodItems}></ErrorMessage>
    </React.Fragment>
  );
}

export default App;