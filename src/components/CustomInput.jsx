import React from "react";

const CustomInput = ({ type, label, i_id, i_class }) => {
  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={`floatingInput ${i_id}`}
        placeholder={label}
      />
      <label for={i_id}>{label}</label>
    </div>
  );
};

export default CustomInput;
