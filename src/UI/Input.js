import cz from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={cz.customInput}
      onChange={props.onChange}
      type={props.type}
    >
      {props.children}
    </input>
  );
};

export default Input;
