import React from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function CurrentLocationButton() {
  function searchLocation(position) {
    let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(WeatherInfo);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let currentLocationButton = document.querySelector(
    "#current-location-button"
  );
  currentLocationButton.addEventListener("click", getCurrentLocation);

  return (
    <input
      type="submit"
      value="Current"
      className="btn btn-success w-100"
      id="current-location-button"
    />
  );
}
