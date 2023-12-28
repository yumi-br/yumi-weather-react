import React from "react";
import "./App.css";
import Weather from "./Weather";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="container">
      <div id="weather" className="weather-container">
        <div>
          <header>
            <ul class="navigation-items">
              <li class="navigation-item">
                <a href="/">Florianópolis</a>
              </li>
              <li class="navigation-item">
                <a href="/">Manaus</a>
              </li>
              <li class="navigation-item">
                <a href="/">Recife</a>
              </li>
              <li class="navigation-item">
                <a href="/">São Paulo</a>
              </li>
            </ul>
          </header>
          <div>
            <div class="App">
              <div>
                <div class="clearfix">
                  <form class="float-left">
                    <input
                      type="text"
                      placeholder="Enter a city"
                      autocomplete="off"
                      value
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="Search"
                    ></input>
                  </form>
                  <button class="float-left btn btn-success">Current</button>
                </div>
                <div class="weather-summary">
                  <div class="weather-summary-header">
                    <h1>Florianópolis</h1>
                    <div class="weather-detail__text">Wednesday 04:20</div>
                    <div class="weather-detail__text">Clouds</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="clearfix">
                        <div class="float-left weather-icon">
                          <ReactAnimatedWeather
                            icon="CLEAR_DAY"
                            size={48}
                            animate={true}
                            color="goldenrod"
                          />
                        </div>
                        <div class="weather-temp weather-temp--today">14</div>
                        <div class="weather-unit__text weather-unit__text--today">
                          °C
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="weather-detail__text">Precipitation: 85%</div>
                      <div class="weather-detail__text">Wind: 3km/h</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-2">
                    <div class="forecast-day">Thu</div>
                    <div class="forecast-icon">
                      <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        size={48}
                        animate={true}
                        color="goldenrod"
                      />
                    </div>
                    <div class="forecast-temperature">"14°</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="forecast-day">Fri</div>
                    <div class="forecast-icon">
                      <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        size={48}
                        animate={true}
                        color="goldenrod"
                      />
                    </div>
                    <div class="forecast-temperature">14°</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="forecast-day">Sat</div>
                    <div class="forecast-icon">
                      <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        size={48}
                        animate={true}
                        color="goldenrod"
                      />
                    </div>
                    <div class="forecast-temperature">14°</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="forecast-day">Sun</div>
                    <div class="forecast-icon">
                      <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        size={48}
                        animate={true}
                        color="goldenrod"
                      />
                    </div>
                    <div class="forecast-temperature">14°</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="forecast-day">Mon</div>
                    <div class="forecast-icon">
                      <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        size={48}
                        animate={true}
                        color="goldenrod"
                      />
                    </div>
                    <div class="forecast-temperature">14°</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/yumi-br/yumi-weather-react">Open-sourced</a>{" "}
        by{" "}
        <a href="https://www.linkedin.com/in/yumi-aline-inoue-450650267/">
          Yumi
        </a>
      </small>
    </div>
  );
}

export default App;
