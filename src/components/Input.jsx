import React from "react";
import "./Input.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="input_container">
      <label  className="label_text">{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} className="textarea" />
      ) : (
        <input className="input"  ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
