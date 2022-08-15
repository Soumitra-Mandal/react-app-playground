import "./App.css";
import React from "react";
import { Switch } from "./components/Switch";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(0);
  return (
    <div className="App" style={{backgroundColor:toggle?"white":"black"}}>
      <h1>Demo App</h1>
      <Switch toggle = {toggle} setToggle={setToggle}/>
    </div>
  );
}

export default App;
