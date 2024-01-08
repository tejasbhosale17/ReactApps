import Item from "./Item";
const FoodItems = ({ FoodItems }) => {
  return (
    <ul className="list-group">
      {FoodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
