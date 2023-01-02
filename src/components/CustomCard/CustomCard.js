import React from "react";
import "./custom-card.scss";

const CustomCard = (props) => {
  return (
    <div className="custom-card">
      <div className="d-flex justify-content-start">
        <div className="custom-card-img-box">
          <img className="custom-card-img" src={props.img} alt=""></img>
        </div>

        <h5 className="custom-card-title text-primary">{props.title}</h5>
      </div>
      <p className="custom-card-text text-primary p-1">{props.text}</p>
    </div>
  );
};

export default CustomCard;
