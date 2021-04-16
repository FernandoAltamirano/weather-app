import React, { useEffect, useState } from "react";
import WindStatus from "./WindStatus";
import "../styles/highlights.css";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import AirPressure from "./AirPressure";
function TodayHightlights({ data }) {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    setInfo(data);
  }, [data]);
  return (
    <div className="todayHightlights">
      <h1>Today's Hightlights</h1>
      <div className="todayHightlights__container">
        <WindStatus wind={info?.wind_speed} />
        <Humidity humidity={info?.humidity} />
        <Visibility visibility={info?.visibility} />
        <AirPressure pressure={info?.air_pressure} />
      </div>
    </div>
  );
}

export default TodayHightlights;
