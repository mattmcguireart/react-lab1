import React from "react";
import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
