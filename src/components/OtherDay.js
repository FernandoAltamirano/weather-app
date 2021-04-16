import React, { useEffect, useState } from "react";
import moment from "moment";
import useImage from "../useImage";
import "../styles/otherDay.css";
function OtherDay({ item, grades }) {
  const image = useImage(item.weather_state_name);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const convertGrades = (grades) => ((grades * 9) / 5 + 32).toFixed(1);

  useEffect(() => {
    if (item) {
      if (grades === "c") {
        setMax(item.max_temp.toFixed(1));
        setMin(item.min_temp.toFixed(1));
      } else {
        setMax(convertGrades(item.max_temp));
        setMin(convertGrades(item.min_temp));
      }
    }
  }, [grades]);
  return (
    <div className="otherDay">
      <p>{moment(item.applicable_date).format("ll")}</p>
      <img src={image} alt={item.weather_state_name} />
      <div className="otherDay__degrees">
        <span>
          {max} °{grades === "c" ? "C" : "F"}
        </span>
        <span>
          {min} °{grades === "c" ? "C" : "F"}
        </span>
      </div>
    </div>
  );
}

export default OtherDay;
