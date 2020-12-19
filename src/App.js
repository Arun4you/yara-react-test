import React from "react";
import { Routes } from './Routes'

function App() {

  return (
    <div className="App">
        <div style={{
          display: "flex",
          background: "#707070",
          flexDirection: "row",
          width: "100%",
          height: "100%"
        }}>
          <Routes />
        </div>
    </div>
  );
}

export default App;
