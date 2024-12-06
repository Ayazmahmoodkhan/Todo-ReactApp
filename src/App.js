import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleOnClick = (itemName, itemDate) => {
    const newItems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newItems);
  };
  const handleDeleteButtun = (itemName) => {
    const newItems = todoItems.filter((item) => item.name != itemName);
    setTodoItems(newItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleOnClick={handleOnClick} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onClickDelete={handleDeleteButtun}
      ></TodoItems>
    </center>
  );
}

export default App;
