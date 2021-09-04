import cz from "./Input.module.css";

const Input = ({
  className,
  onChange,
  type,
  placeholder,
  value,
  defaultChecked,
  children,
}) => {
  return (
    <input
      className={`${cz.customInput} ${className}`}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value = {value}
      defaultChecked={defaultChecked}
    >
      {children}
    </input>
  );
};

export default Input;
