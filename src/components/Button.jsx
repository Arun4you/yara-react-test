import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
        borderRadius: "2%",
        margin: 10,
      }}
    >
      <button
        style={{
          color: "white",
          background: "green",
          height: 40
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
