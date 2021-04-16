import React, { useEffect, useState } from "react";
import useImage from "../useImage";
import "../styles/principal.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import bg from "../images/Cloud-background.png";
import moment from "moment";
function Principal({ showModal, data, title }) {
  const [date, setDate] = useState(null);
  const image = useImage(data?.weather_state_name);

  useEffect(() => {
    if (data) {
      setDate(
        `${moment(data.applicable_date).format("dddd")},
        ${moment(data.applicable_date).format("LL")}`
      );
    }
  }, [data]);

  return (
    <div className="principal">
      <div className="principal__button" onClick={showModal}>
        <button>Search for places</button>
      </div>
      <div className="principal__image">
        <img className="principal__imageBG" src={bg} alt="" />
        <img className="principal__imageWEATHER" src={image} alt="weather" />
      </div>
      <div className="principal__degrees">
        <h1>{data?.the_temp.toFixed(1)}</h1>
        <span>°C</span>
      </div>
      <div className="principal__weather">
        <h2>{data?.weather_state_name}</h2>
      </div>
      <div className="principal__location">
        <p>{date}</p>
        <p>
          <LocationOnIcon />
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
}

export default Principal;
