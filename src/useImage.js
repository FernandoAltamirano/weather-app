import { useEffect, useState } from "react";
import clear from "./images/Clear.png";
import hail from "./images/Hail.png";
import heavyCloud from "./images/HeavyCloud.png";
import heavyRain from "./images/HeavyRain.png";
import lightCloud from "./images/LightCloud.png";
import lightRain from "./images/LightRain.png";
import shower from "./images/Shower.png";
import snow from "./images/Snow.png";
import sleet from "./images/Sleet.png";
import thunder from "./images/Thunderstorm.png";
function useImage(weather) {
  const [image, setImage] = useState("");

  useEffect(() => {
    switch (weather) {
      case "Snow":
        setImage(snow);
        break;
      case "Sleet":
        setImage(sleet);
        break;
      case "Hail":
        setImage(hail);
        break;
      case "Thunderstorm":
        setImage(thunder);
        break;
      case "Heavy Rain":
        setImage(heavyRain);
        break;
      case "Light Rain":
        setImage(lightRain);
        break;
      case "Showers":
        setImage(shower);
        break;
      case "Heavy Cloud":
        setImage(heavyCloud);
        break;
      case "Light Cloud":
        setImage(lightCloud);
        break;
      case "Clear":
        setImage(clear);
        break;
    }
  }, [weather]);
  return image;
}

export default useImage;
