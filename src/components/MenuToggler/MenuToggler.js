import React from "react";
import "./menu-toggler.scss";

const Line = ({lineColor}) => (
  <div
    style={{
      width: "100%",
      height: "3px",
      backgroundColor: `${lineColor}`,
      borderRadius: "2px",
    }}
  ></div>
);

const MenuToggler = ({lineColor, backgroundColor}) => {
  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        width: "40px",
        height: "40px",
        padding: "5px",
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-around",
        borderRadius: "8px"
      }}
    >
      <Line lineColor={lineColor}/>
      <Line lineColor={lineColor}/>
      <Line lineColor={lineColor}/>
    </div>
  );
};

export default MenuToggler;
