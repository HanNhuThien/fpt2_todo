import cz from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${cz.customInput} ${props.className}`}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      value = {props.value}
    >
      {props.children}
    </input>
  );
};

export default Input;
