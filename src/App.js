import "./App.css";
import SearchBar from "./UI/SearchBar";
import Button from "./UI/Button";
import TodoList from "./com/TodoList";
import { useState } from "react";

const DUMMY_TODO_LIST = [
  { id: 1, title: "title 1", description: "description 1", isDone: false },
  { id: 2, title: "title 1", description: "description 1", isDone: false },
  { id: 3, title: "title 1", description: "description 1", isDone: false },
  { id: 4, title: "title 1", description: "description 1", isDone: false },
];

function App() {
  const [todoList, setTodoList] = useState(DUMMY_TODO_LIST);

  return (
    <div className="App">
      <SearchBar />
      <Button>Add todo</Button>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
