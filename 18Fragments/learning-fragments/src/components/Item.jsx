// const Item = (props) => {
import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  // console.log(styles);
  // let { fooditem } = props;
  const buyButton = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(event) => {
            buyButton(event);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
