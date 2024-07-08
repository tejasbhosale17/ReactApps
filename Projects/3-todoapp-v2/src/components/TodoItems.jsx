import TodoItem from "./TodoItem";
// import "./todoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  console.log(todoItems);
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
