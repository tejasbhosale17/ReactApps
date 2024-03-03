import styles from "./buttons.module.css";
function Button({ item, onClickButton }) {
  // console.log(item);
  return (
    <>
      <button key={item} className={styles.buttons} onClick={onClickButton}>
        {item}
      </button>
    </>
  );
}
export default Button;
