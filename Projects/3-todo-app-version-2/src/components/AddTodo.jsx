import "./addTodo.module.css";
function AddTodo() {
  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-sm-6">
            <input type="text" placeholder="Enter Todo here"></input>
          </div>
          <div className="col-sm-4">
            <input type="date"></input>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-success kg-button" type="submit">
              Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
