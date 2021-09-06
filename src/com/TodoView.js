import Input from "../UI/Input";
import Button from "../UI/Button";
import TodoList from "./TodoList";
import { useEffect, useRef, useState } from "react";
import AddTodo from "./AddTodo";
import { isStringBlank } from "../utils/ValidateUtils";
import cz from "./TodoView.module.css";
import {
  dbAddTodo,
  dbDeleteTodo,
  dbFetchTodos,
  dbFilterTodos,
  dbUpdateTodo,
} from "../db/DataHelper_Todos";

function TodoView() {
  const [todoList, setTodoList] = useState([]);
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    dbFetchTodos((todos) => {
      setTodoList(todos);
    });
  }, []);

  useEffect(() => {
    console.log("todoList: ");
    console.log(todoList);
  }, [todoList]);

  const filterString = searchRef?.current?.value;

  const updateTodoFn = (updatedTodo) => {
    dbUpdateTodo(updatedTodo, filterString, (todos) => {
      setTodoList(todos);
    });
  };

  const deleteTodoFn = (todoId) => {
    dbDeleteTodo(todoId, filterString, (todos) => {
      setTodoList(todos);
    });
  };

  const addTodoFn = (newTodo) => {
    dbAddTodo(newTodo, filterString, (todos) => {
      setTodoList(todos);
    });
  };

  const filterTodoListFn = (keySearch) => {
    dbFilterTodos(keySearch, (filteredTodos) => {
      setTodoList(filteredTodos);
    });
  };

  const onSearch = (e) => {
    const keySearch = e.target.value;
    if (isStringBlank(keySearch)) {
      // return;
    }
    filterTodoListFn(keySearch);
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

  const P_NO_ITEM_FOUND = <p>No item found</p>;

  return (
    <div className={cz.todoView}>
      <Input
        placeholder="search by title / description"
        onChange={onSearch}
        ref={searchRef}
      />

      {!isAddingTodo && (
        <Button className={cz.button_addTodo} onClick={onClickAddTodo}>
          Add todo
        </Button>
      )}

      {isAddingTodo && <AddTodo onAddTodo={onAddTodo} />}

      {todoList?.length === 0 && P_NO_ITEM_FOUND}

      <TodoList
        todoList={todoList}
        onUpdateItem={updateTodoFn}
        onDeleteItem={deleteTodoFn}
      />
    </div>
  );
}

export default TodoView;
