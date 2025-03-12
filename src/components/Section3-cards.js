import React from "react";
import "../styles/Section3-card.scss";
const Section3Cards = ({ imageUrl, title, description, subText, id }) => {
  return (
  <div className="section3-card" key={id}>
    <div className="card-image">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-subtext">{subText}</p>
    </div>
  </div>
  );
};

export default Section3Cards;
