import React, { useEffect, useState } from "react";

function Visibility({ visibility }) {
  const [visib, setVisib] = useState(0);
  useEffect(() => {
    if (visibility) {
      setVisib(visibility.toFixed(1));
    }
  }, [visibility]);
  return (
    <div className="visibility card">
      <p>Visibility</p>
      <div className="visibility__value">
        <h1>{visib}</h1>
        <span>miles</span>
      </div>
    </div>
  );
}

export default Visibility;
