import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola! Soy Manu :D.. qué onda? :) </p>
        <a
          className="App-link"
          href="https://www.google.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          un link acá de onda
        </a>
      </header>
    </div>
  );
}

export default App;
