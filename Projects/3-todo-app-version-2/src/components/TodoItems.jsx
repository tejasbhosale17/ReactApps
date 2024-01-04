import TodoItem from "./TodoItem";
import "./todoItems.module.css";
const TodoItems = ({ todoItems }) => {
  console.log(todoItems);
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
