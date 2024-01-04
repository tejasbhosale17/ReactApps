import styles from "./buttons.module.css";
function Button({ item }) {
  console.log(item);
  return (
    <>
      <button key={item} className={styles.buttons}>
        {item}
      </button>
    </>
  );
}
export default Button;
