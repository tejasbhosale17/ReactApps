import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { name: "Eat Healthy", dueDate: "05-01-2024" },
    { name: "Apply Universities", dueDate: "10-01-2024" },
    { name: "Go to College", dueDate: "08-01-2024" },
    { name: "Read Book", dueDate: "04-01-2024" },
  ];
  return (
    <center className=" ">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
