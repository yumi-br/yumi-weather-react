import React from "react";
import axios from "axios";
import { WiDaySunny } from "weather-icons-react";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "127b5ec2f6d0997638b7af4846d15bfb";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return <WiDaySunny size={100} color="#fff" />;
}
