import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Florianopolis" />

        <footer>
          <a
            href="https://github.com/yumi-br/yumi-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/yumi-aline-inoue-450650267/"
            target="_blank"
            rel="noreferrer"
          >
            Yumi
          </a>
        </footer>
      </div>
    </div>
  );
}
