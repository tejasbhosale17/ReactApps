import Item from "./Item";
const FoodItems = () => {
  let foodItems = [
    "Fruits",
    "Green Vegetables",
    "Milk",
    "Sprouts",
    "Dal",
    "Ghee",
    "Almonds",
  ];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
