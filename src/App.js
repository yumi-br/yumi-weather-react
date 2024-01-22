import React from "react";
import Weather from "./Weather";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Florianopolis" />

        <footer>
          <a
            href="https://github.com/yumi-br/yumi-weather-react"
            target="_blank"
          >
            Open-sourced
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/yumi-aline-inoue-450650267/"
            target="_blank"
          >
            Yumi
          </a>
        </footer>
      </div>
    </div>
  );
}
