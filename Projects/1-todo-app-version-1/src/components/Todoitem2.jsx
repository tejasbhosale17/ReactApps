function TodoItem2() {
  let todoName = "Go Gym";
  let todoDate = "03-01-2024";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2 text-center">
          <button className="btn btn-danger kg-button" type="submit">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
