import cz from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const mapTodoItem = (todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>;

  const todoList = props.todoList.map(mapTodoItem);

  return <div className={cz.todoList}>{todoList}</div>;
};

export default TodoList;
