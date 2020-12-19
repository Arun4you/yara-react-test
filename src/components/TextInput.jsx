import React from "react";

export const TextInput = ({value, placeholder, handleChange}) => {
  return (
    <div style={{
      borderRadius: "2%",
      margin: 10
    }}>
      <input type="text" value={value} placeholder={placeholder} onChange={handleChange}/>
    </div>
  );
};
