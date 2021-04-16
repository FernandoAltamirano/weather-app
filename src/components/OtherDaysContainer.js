import React from "react";
import OtherDay from "./OtherDay";
import "../styles/otherDaysContainer.css";
function OtherDaysContainer({ data, grades }) {
  return (
    <div className="otherDaysContainer">
      {data?.slice(1, 6).map((item) => (
        <OtherDay key={item.id} item={item} grades={grades} />
      ))}
    </div>
  );
}

export default OtherDaysContainer;
