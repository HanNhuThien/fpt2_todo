import cz from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const onUpdateItem = (todo) => {
    props.onUpdateItem(todo);
  };

  const onDeleteItem = (id) => {
    props.onDeleteItem(id);
  };

  const mapTodoItem = (todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onUpdateItem={onUpdateItem}
      onDeleteItem={onDeleteItem}
    ></TodoItem>
  );

  const todoList = props.todoList.map(mapTodoItem);

  return <div className={cz.todoList}>{todoList}</div>;
};

export default TodoList;
