import React, { useRef } from "react";
import "../styles/modal.css";
import CloseIcon from "@material-ui/icons/Close";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SearchIcon from "@material-ui/icons/Search";
function Modal({ getCities, cities, getCityData, show, showModal }) {
  const input = useRef(null);
  const handleSearchByEnter = (e) => {
    if (input.current.value !== "" && e.key === "Enter") {
      getCities(input.current.value);
    }
  };
  const handleSearchByClick = () => {
    if (input.current.value !== "") {
      getCities(input.current.value);
    }
  };

  return (
    <div className={!show ? "modal left" : "modal"}>
      <div className="modal__close">
        <CloseIcon className="modal__icon" onClick={showModal} />
      </div>
      <div className="modal__search">
        <div className="modal__input" onKeyPress={handleSearchByEnter}>
          <SearchIcon className="modal__icon" />
          <input ref={input} type="text" placeholder="search location" />
        </div>
        <button onClick={handleSearchByClick}>Search</button>
      </div>
      <div className="modal__results">
        {cities?.map((city) => (
          <div
            key={city.woeid}
            className="result"
            onClick={() => getCityData(city.title)}
          >
            <p>{city.title}</p>
            <NavigateNextIcon className="modal__icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modal;
