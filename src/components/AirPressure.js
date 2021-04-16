import React, { useEffect, useState } from "react";

function AirPressure({ pressure }) {
  const [airPressure, setAirPressure] = useState(0);
  useEffect(() => {
    setAirPressure(pressure);
  }, [pressure]);
  return (
    <div className="airpressure card">
      <p>Air Pressure</p>
      <div className="airpressure__value">
        <h1>{airPressure}</h1>
        <span>mb</span>
      </div>
    </div>
  );
}

export default AirPressure;
