import cz from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onUpdateItem = (todo) => {
    this.props.onUpdateItem(todo);
  };

  onDeleteItem = (id) => {
    this.props.onDeleteItem(id);
  };

  mapTodoItem = (todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onUpdateItem={this.onUpdateItem}
      onDeleteItem={this.onDeleteItem}
    ></TodoItem>
  );

  render() {
    const todoList = this.props.todoList.map(this.mapTodoItem);
    return <div className={cz.todoList}>{todoList}</div>;
  }
}

export default TodoList;
