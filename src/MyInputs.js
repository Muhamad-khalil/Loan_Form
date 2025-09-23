import React from "react";

const MyInputs = ({ value, handleChange, nameInput }) => {
  return (
    <div>
      <label>{nameInput}</label>
      <input
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default MyInputs;
