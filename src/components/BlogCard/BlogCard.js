import React from "react";
import "./blog-card.scss";

const BlogCard = ({ img, text, title, date }) => {
    
  return (
    <div className="card" style={{border: "none", borderRadius: 0}}>
      <img className="card-img-top" src={img} alt="blog-card" />
      <div className="card-body">
        <p className="card-text">
            <i className="fa-solid fa-calendar-days"></i>{" "}
          <small className="text-muted">{date}</small>
        </p>
        <h5 className="card-title text-primary">{title}</h5>
        <p className="blog-card-text">{text}</p>
        <button className="btn btn-secondary text-white">Read More..</button>
      </div>
    </div>
  );
};

export default BlogCard;
