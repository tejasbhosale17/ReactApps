import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

function App() {
  const initialTodoItems = [
    // { name: "Eat Healthy", dueDate: "05-01-2024" },
    // { name: "Apply Universities", dueDate: "10-01-2024" },
    // { name: "Go to College", dueDate: "08-01-2024" },
    // { name: "Read Book", dueDate: "04-01-2024" },
  ];

  //Can give Error for complex & large data
  // const handleNewItem = (itemName, itemDueDate) => {
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];
  //   setTodoItems((newTodoItems));
  // };

  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [todoItems, displaceTodoItems] = useReducer(todoItemsReducer, []);
  //Another way to handle complex and large data
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    displaceTodoItems(newItemAction);

    // setTodoItems((currVaalue) => {
    //   const newTodoItems = [
    //     ...currVaalue,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    //   return newTodoItems;
    // });
  };

  const deleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    displaceTodoItems(newItemAction);

    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        // addNewItem,
        // deleteItem,
        displaceTodoItems,
      }}
    >
      <center className="home">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
