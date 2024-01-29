import React from "react";

export default function LocalTime(props) {
  return (
    <div>
      <span>Local time: GTM {props.timezone / 3600}:00</span>
    </div>
  );
}
