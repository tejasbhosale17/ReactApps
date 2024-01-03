// import FoodItems from "./FoodItems"
const ErrorMessage = ({ FoodItems }) => {
  return <>{FoodItems.length === 0 && <h2>I am Still Hungry</h2>}</>;
};
export default ErrorMessage;
