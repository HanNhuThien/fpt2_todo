import React from "react";
import cz from "./Input.module.css";

const Input = React.forwardRef(
  (
    { className, onChange, type, placeholder, value, defaultChecked, children },
    ref
  ) => {
    return (
      <input
        className={`${cz.customInput} ${className}`}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultChecked={defaultChecked}
        ref={ref}
      >
        {children}
      </input>
    );
  }
);

export default Input;
