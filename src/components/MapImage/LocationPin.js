import React from "react";
import "./map-image.scss";
const LocationPin = ({text}) => {
  return (
    <div className="pin">
      <i className="fas fa-map-marker-alt pin-icon"></i>
      {/* <p className="pin-text">{text}</p> */}
    </div>
  );
};

export default LocationPin;
