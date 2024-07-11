import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
// import "./todoItems.module.css";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
