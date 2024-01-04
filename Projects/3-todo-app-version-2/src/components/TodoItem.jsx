function TodoItem({ todoName, todoDate }) {
  // let todoName = "Complete Reactjs Course";
  // let todoDate = "07-01-2024";

  console.log(todoName, todoDate);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2 text-center">
          <button
            className="btn btn-danger kg-button align-item: center"
            type="submit"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
