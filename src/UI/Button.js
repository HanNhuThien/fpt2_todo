import cz from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${cz.customButton} ${props.className}`}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default Button;
