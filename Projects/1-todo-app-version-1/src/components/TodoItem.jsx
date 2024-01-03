function TodoItem() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6">Complete Reactjs Course</div>
          <div className="col-sm-4">07-01-2024</div>
          <div className="col-sm-2">
            <button className="btn btn-danger" type="submit">
              Done
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6">Go Gym</div>
          <div className="col-sm-4">03-01-2024</div>
          <div className="col-sm-2">
            <button className="btn btn-danger" type="submit">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
