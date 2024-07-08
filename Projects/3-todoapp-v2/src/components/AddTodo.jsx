import "./addTodo.module.css";
import { useState } from "react";
function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-sm-6">
            <input
              type="text"
              placeholder="Enter Todo here"
              value={todoName}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="col-sm-4">
            <input
              type="date"
              value={dueDate}
              onChange={handleDateChange}
            ></input>
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-success kg-button"
              type="button"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
