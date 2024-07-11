import "./addTodo.module.css";
import { useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`TodoName:${todoName} and DueDate:${dueDate}`);
    addNewItem(todoName, dueDate);
  };

  return (
    <div>
      <div className="container text-center">
        <form className="row kg-row" onSubmit={handleAddButtonClicked}>
          <div className="col-sm-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo here"
            ></input>
          </div>
          <div className="col-sm-4">
            <input type="date" ref={dueDateElement}></input>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-success kg-button">
              <BiMessageAdd />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTodo;
