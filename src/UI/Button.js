import cz from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={cz.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
