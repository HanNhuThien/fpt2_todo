import cz from "./Button.module.css";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      // className={`${cz.customButton} ${className}`}
      className={`${cz.customButton} ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
