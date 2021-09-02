import "./App.css";
import Input from "./UI/Input";
import Button from "./UI/Button";
import TodoList from "./com/TodoList";
import { useState } from "react";

const DUMMY_TODO_LIST = [
  { id: 1, title: "title 1", description: "description 1", isDone: false },
  { id: 2, title: "title 2", description: "description 2", isDone: false },
  { id: 3, title: "title 3", description: "description 3", isDone: false },
  { id: 4, title: "title 4", description: "description 4", isDone: false },
];

function App() {
  const [todoList, setTodoList] = useState(DUMMY_TODO_LIST);
  const onUpdateItem = (updatedTodo) => {
    setTodoList((prevState) => {
      let prev = [...prevState];
      const updatedIndex = prev.findIndex((e) => e.id === updatedTodo.id);

      if (updatedIndex === -1) {
        console.log("updated index invalid");
        return prev;
      }
      prev.splice(updatedIndex, 1, updatedTodo);
      return prev;
    });
  };
  const onDeleteItem = (todoId) => {
    setTodoList((prevState) => {
      let prev = [...prevState];
      const updatedIndex = prev.findIndex((e) => e.id === todoId);
      if (updatedIndex === -1) {
        console.log("updated index invalid");
        return prev;
      }
      prev.splice(updatedIndex, 1);
      console.log(prev);
      return prev;
    });
  };
  return (
    <div className="App">
      <Input />
      <Button>Add todo</Button>
      <TodoList
        todoList={todoList}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
