import React, { useState, useCallback } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";

export const Card = () => {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [action, setAction] = useState("+");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);

  const handleReset = () => {
    setTextInput1("")
    setTextInput2("")
    setAction("+")
    setResult(null)
  };

  const onclickMinus = useCallback(() => {
    setAction("-");
    setCount(prevState => parseInt(prevState + 1))
    const value = textInput1 - textInput2;
    setResult(parseInt(value));
  },[textInput1, textInput2]);

  const onclickPlus = useCallback(() => {
    setAction("+");
    setCount(prevState => parseInt(prevState + 1))
    const value = textInput1 + textInput2;
    setResult(parseInt(value));
  },[textInput1, textInput2]);

  const onclickMultiply = useCallback(() => {
    setAction("*");
    setCount(prevState => parseInt(prevState + 1))
    const value = textInput1 * textInput2;
    setResult(parseInt(value));
  },[textInput1, textInput2]);

  const onclickDivide = useCallback(() => {
    setAction("/");
    setCount(prevState => parseInt(prevState + 1))
    const value = textInput1 / textInput2;
    setResult(parseFloat(value));
  },[textInput1, textInput2]);

  return (
    <div
      style={{
        display: "flex",
        background: "#FFFFFF",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: 200,
        margin: 24,
        padding: 24,
        borderRadius: 8,
        boxShadow: "2px 1px 1px rgba(0,0,0, 0.1)",
      }}
    >
      <div data-testid='total-operations'>
        Total Operations Performed: {count}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder={"Eg: 1"}
          handleChange={(e) => {
            setTextInput1(parseInt(e.target.value) || 0 );
          }}
          value={textInput1}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {action}
        </div>
        <TextInput
          placeholder={"Eg: 2"}
          handleChange={(e) => {
            setTextInput2(parseInt(e.target.value || 0));
          }}
          value={textInput2}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 10,
        }}
      >
        <Button text={"+"} onClick={onclickPlus} />
        <Button text={"-"} onClick={onclickMinus} />
        <Button text={"*"} onClick={onclickMultiply} />
        <Button text={"/"} onClick={onclickDivide} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button text={"Reset"} onClick={handleReset} />
        {result ? <div style={{
          display: "flex",
          alignItems:"center"
        }} data-testid="result">Result: {result}</div> : null}
      </div>
    </div>
  );
};
