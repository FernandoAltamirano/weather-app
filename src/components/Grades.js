import React, { useState } from "react";
import "../styles/grades.css";
function Grades({ handleGrades }) {
  const [active, setActive] = useState("c");
  return (
    <div className="grades">
      <button
        className={active === "c" ? "grades__button active" : "grades__button"}
        onClick={() => {
          setActive("c");
          handleGrades("c");
        }}
      >
        °C
      </button>
      <button
        className={active === "f" ? "grades__button active" : "grades__button"}
        onClick={() => {
          setActive("f");
          handleGrades("f");
        }}
      >
        °F
      </button>
    </div>
  );
}

export default Grades;
