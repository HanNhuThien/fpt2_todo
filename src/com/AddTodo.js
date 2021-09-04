import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import cz from "./AddTodo.module.css";
import { isStringBlank } from "../utils/ValidateUtils";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClickCancel = (e) => {
    props.onAddTodo(null);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isStringBlank(title) || isStringBlank(description)) {
      props.onAddTodo(null);
      return;
    }
    props.onAddTodo({
      id: 1,
      title: title,
      description: description,
      isDone: false,
    });
  };

  return (
    <form
      className={`${cz.addTodo}`}
      onSubmit={onFormSubmit}
    >
      {/* 1. title */}
      <title>Add todo</title>
      <Input
        className={cz.todoTitle}
        placeholder="input title"
        onChange={onChangeTitle}
        value={title}
      ></Input>

      {/* 2. description */}
      <Input
        className={cz.todoDescription}
        placeholder="input description"
        onChange={onChangeDescription}
        value={description}
      ></Input>

      {/* 3. button save/ cancel save */}
      <div className={`${cz.div_buttons} ${cz.div_buttons_edit}`}>
        <Button className={cz.button_save} type="submit">
          Save
        </Button>
        <Button className={cz.button_cancel} onClick={onClickCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
export default AddTodo;
