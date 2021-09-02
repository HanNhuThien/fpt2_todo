import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import cz from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  //   const [isDone, setIsDone] = useState(props.todo.todo.isDone);
  const [title, setTitle] = useState(props.todo.title);
  const [description, setDescription] = useState(props.todo.description);
  const [isDone, setIsDone] = useState(props.todo.isDone);

  const onCheckboxChangeHandler = (e) => {
    //setIsDone(e.checked);
  };
  const onClickEdit = (e) => {
    setIsEditing((prev) => !prev);
  };
  const onClickDelete = (e) => {
    props.onDeleteItem(props.todo.id);
  };

  const onClickSave = (e) => {
    setIsEditing((prev) => !prev);
    props.onUpdateItem({
      id: props.todo.id,
      title: title,
      description: description,
      isDone: isDone,
    });
  };
  const onClickCancel = (e) => {
    // setIsDone(e.checked);
    setIsEditing(false);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    // setIsDone(e.checked);
    // ref_title.current.value = e.target.value;
  };
  const onChangeDescription = (e) => {
    // setIsDone(e.checked);
  };

  return (
    <React.Fragment>
      {isEditing ? (
        <form className={`${cz.todoItem} ${cz.todoItem_edit}`}>
          {/* ------------- mode : editing -------------*/}
          <div className={cz.div_title_des}>
            {/* 1. title */}

            <Input
              className={cz.todoTitle_edit}
              placeholder="input title"
              value={title}
              onChange={onChangeTitle}
            ></Input>

            {/* 2. description */}
            <Input
              className={cz.todoDescription_edit}
              placeholder="input description"
              value={description}
              onChange={onCheckboxChangeHandler}
            ></Input>
          </div>
          {/* 3. checkbox isDone */}
          <Input
            className={cz.checkbox}
            type="checkbox"
            checked={isDone}
            onChange={onCheckboxChangeHandler}
          ></Input>

          {/* 4. button save/ cancel save */}
          <div className={`${cz.div_buttons} ${cz.div_buttons_edit}`}>
            <Button className={cz.button_save} onClick={onClickSave}>
              Save
            </Button>
            <Button className={cz.button_cancel} onClick={onClickCancel}>
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className={`${cz.todoItem} ${cz.todoItem_display}`}>
          {/* ----- mode : display (not editing) -------------- */}

          <div className={cz.div_title_des}>
            {/* 1. title */}
            <span className={cz.todoTitle_display}>{title}</span>

            {/* 2. description */}
            <span className={cz.todoDescription_display}>{description}</span>
          </div>

          {/* 3. checkbox isDone */}
          <Input
            className={cz.checkbox}
            type="checkbox"
            checked={isDone}
            onChange={onCheckboxChangeHandler}
          ></Input>

          {/* 4. button edit / delete*/}
          <div className={`${cz.div_buttons} ${cz.div_buttons_display}`}>
            <Button className={cz.button_edit} onClick={onClickEdit}>
              Edit
            </Button>
            <Button className={cz.button_delete} onClick={onClickDelete}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TodoItem;
