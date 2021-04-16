import React, { useEffect, useState } from "react";
function Humidity({ humidity }) {
  const [percentage, setPercetange] = useState("50%");

  useEffect(() => {
    setPercetange(humidity);
  }, [humidity]);
  return (
    <div className="humidity card">
      <p>Humidity</p>
      <div className="humidity__value">
        <h1>{humidity}</h1>
        <span>%</span>
      </div>
      <div className="humidity__barContainer">
        <div className="humidity__numbers">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="humidity__bar">
          <div className="yellow" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="humidity__numbers percentage">
          <span>%</span>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
