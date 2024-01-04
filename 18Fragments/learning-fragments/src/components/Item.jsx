// const Item = (props) => {
import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  console.log(styles);
  // let { fooditem } = props;
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
      </li>
    </>
  );
};

export default Item;
