import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialTodoItems = [
    { name: "Eat Healthy", dueDate: "05-01-2024" },
    { name: "Apply Universities", dueDate: "10-01-2024" },
    // { name: "Go to College", dueDate: "08-01-2024" },
    // { name: "Read Book", dueDate: "04-01-2024" },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  //Can give Error for complex & large data
  // const handleNewItem = (itemName, itemDueDate) => {
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];
  //   setTodoItems((newTodoItems));
  // };

  //Another way to handle complex and large data
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currVaalue) => {
      const newTodoItems = [
        ...currVaalue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`);
  };

  return (
    <center className="home">
      <AppName></AppName>
      <AddTodo handleNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
