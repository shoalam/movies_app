import React from "react";

const Input = ({ label, name, id, type, value, onChange, errors }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
    </>
  );
};

export default Input;
