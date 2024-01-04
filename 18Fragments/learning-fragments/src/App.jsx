import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
function App() {
  let foodItems = ["Avacados", "Fruits", "Green Vegetables", "Milk", "Sprouts"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food </h1>
        <FoodInput></FoodInput>
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
