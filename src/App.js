import React from "react";
import "./style.css";

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <Left1></Left1>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
    </div>
  );
}

export default App;
