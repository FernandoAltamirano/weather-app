import React, { useEffect, useState } from "react";
import ExploreIcon from "@material-ui/icons/Explore";
function WindStatus({ wind }) {
  const [windSpeed, setWindySpeed] = useState(0);
  useEffect(() => {
    if (wind) {
      setWindySpeed(Math.round(wind));
    }
  }, [wind]);
  return (
    <div className="windStatus card">
      <p>Wind status</p>
      <div className="windStatus__value">
        <h1>{windSpeed}</h1>
        <span>mph</span>
      </div>
      <div className="windStatus__details">
        <ExploreIcon className="icon" />
        <span>WSW</span>
      </div>
    </div>
  );
}

export default WindStatus;
