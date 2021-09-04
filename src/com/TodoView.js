import cz from "./TodoView.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { isStringBlank } from "../utils/ValidateUtils";

const DUMMY_TODO_LIST = [
  {
    id: 1,
    title: "title 1 abc",
    description: "description 1 123",
    isDone: false,
  },
  {
    id: 2,
    title: "title 2 ab",
    description: "description 2 23",
    isDone: false,
  },
  {
    id: 3,
    title: "title 3 def",
    description: "description 3 456",
    isDone: false,
  },
  {
    id: 4,
    title: "title 4 gh",
    description: "description 4 56",
    isDone: false,
  },
];

let MAX_ID = 4;
function TodoView() {
  const [todoList, setTodoList] = useState([]);
  const [filterTodoList, setFilterTodoList] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  useEffect(() => {
    setTodoList(DUMMY_TODO_LIST);
  }, []);

  useEffect(() => {
    console.log("todoList: ");
    console.log(todoList);
    console.log("filterTodoList: ");
    console.log(filterTodoList);
  }, [todoList, filterTodoList]);

  const updateTodoFn = (updatedTodo) => {
    setTodoList((prevState) => {
      let updatedTodoList = [...prevState];
      const updatedIndex = updatedTodoList.findIndex(
        (e) => e.id === updatedTodo.id
      );

      if (updatedIndex === -1) {
        console.log("updateTodoFn: updated index invalid");
        return updatedTodoList;
      }
      updatedTodoList.splice(updatedIndex, 1, updatedTodo);
      return updatedTodoList;
    });
  };
  const deleteTodoFn = (todoId) => {
    setTodoList((prevState) => {
      let updatedTodoList = [...prevState];
      const updatedIndex = updatedTodoList.findIndex((e) => e.id === todoId);
      if (updatedIndex === -1) {
        console.log("deleteTodoFn: updated index invalid");
        return updatedTodoList;
      }
      updatedTodoList.splice(updatedIndex, 1);
      console.log(updatedTodoList);
      return updatedTodoList;
    });
  };

  const addTodoFn = (updatedTodo) => {
    if (!updatedTodo) {
      console.log("addTodoFn: updatedTodo invalid");
      return;
    }
    updatedTodo.id = ++MAX_ID;
    setTodoList((prevState) => {
      let updatedTodoList = [...prevState];
      updatedTodoList.unshift(updatedTodo);
      return updatedTodoList;
    });
  };

  const filterTodoListFn = (keySearch) => {
    if (isStringBlank(keySearch)) {
      return todoList;
    }
    const newTodoList = todoList.filter(
      (todo) =>
        todo.title.includes(keySearch) || todo.description.includes(keySearch)
    );
    return newTodoList;
  };

  const onSearch = (e) => {
    const keySearch = e.target.value;
    if (isStringBlank(keySearch)) {
      setIsFiltering(false);
      return;
    }
    setIsFiltering(true);
    setFilterTodoList(filterTodoListFn(keySearch));
  };

  const onClickAddTodo = () => {
    setIsAddingTodo(true);
  };

  const onAddTodo = (newTodo) => {
    setIsAddingTodo(false);
    if (!newTodo) {
      return;
    }
    addTodoFn(newTodo);
  };

  return (
    <div className={cz.todoView}>
      <Input placeholder="search" onChange={onSearch} />

      {!isAddingTodo && (
        <Button
          className={cz.button_addTodo}
          onClick={onClickAddTodo}
        >
          Add todo
        </Button>
      )}

      {isAddingTodo && <AddTodo onAddTodo={onAddTodo} />}

      <TodoList
        todoList={isFiltering ? filterTodoList : todoList}
        onUpdateItem={updateTodoFn}
        onDeleteItem={deleteTodoFn}
      />
    </div>
  );
}

export default TodoView;
