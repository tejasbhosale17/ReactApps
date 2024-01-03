import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className=" ">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
