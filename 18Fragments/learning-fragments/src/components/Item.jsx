// const Item = (props) => {
const Item = ({ foodItem }) => {
  // let { fooditem } = props;
  return (
    <>
      <li className="list-group-item">{foodItem}</li>
    </>
  );
};

export default Item;
