import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import cz from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [title, setTitle] = useState(props.todo.title);
  const [description, setDescription] = useState(props.todo.description);
  const [isDone, setIsDone] = useState(props.todo.isDone);
  const [isEditing, setIsEditing] = useState(false);
  //   const [isDone, setIsDone] = useState(props.todo.isDone);

  const onCheckboxChangeHandler = (e) => {
    setIsDone(e.checked);
  };
  const onClickEdit = (e) => {
    setIsEditing((prev) => !prev);
  };
  const onClickDelete = (e) => {
    // setIsDone(e.checked);
  };

  const onClickSave = (e) => {
    setIsEditing((prev) => !prev);
  };
  const onClickCancelSave = (e) => {
    // setIsDone(e.checked);
  };

  const onChangeTitle = (e) => {
    // setIsDone(e.checked);
  };
  const onChangeDescription = (e) => {
    // setIsDone(e.checked);
  };

  return (
    <React.Fragment>
      {isEditing ? (
        <div className={`${cz.todoItem} ${cz.todoItem_edit}`}>
          {/* ------------- mode : editing -------------*/}
          <div className={cz.div_title_des}>
            {/* 1. title */}
            <Input onChange={onChangeTitle}></Input>

            {/* 2. description */}
            <Input onChange={onCheckboxChangeHandler}></Input>
          </div>
          {/* 3. checkbox isDone */}
          <Input
            type="checkbox"
            checked={isDone}
            onChange={onCheckboxChangeHandler}
          ></Input>

          {/* 4. button save/ cancel save */}
          <div>
            <Button onClick={onClickSave}>Save</Button>
            <Button onClick={onClickCancelSave}>Cancel</Button>
          </div>
        </div>
      ) : (
        <div className={`${cz.todoItem} ${cz.todoItem_notEdit}`}>
          {/* ----- mode : display (not editing) ----- */}
          <div className={cz.div_title_des}>
            {/* 1. title */}
            <h3 className={cz.todoTitle}>{title}</h3>

            {/* 2. description */}
            <p className={cz.todoDescription}>{description}</p>
          </div>

          {/* 3. checkbox isDone */}
          <Input
            type="checkbox"
            checked={isDone}
            onChange={onCheckboxChangeHandler}
          ></Input>

          {/* 4. button edit / delete*/}
          <div>
            <Button onClick={onClickEdit}>Edit</Button>
            <Button onClick={onClickDelete}>Delete</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TodoItem;
