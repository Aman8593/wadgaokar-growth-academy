import Image from "next/image";
import React from "react";
import "../styles/Section2-card.scss";
const Section2card = ({ imageUrl, title, description, id }) => {
  return (
    <div className="card">
      <div className="icon-container">
        <figure className={id % 2 === 0 ? "blue-icon" : ""}>
          <Image
            src={imageUrl}
            alt="Icon"
            width={100}
            height={100}
            className="icon"
          />
        </figure>
      </div>
      <div className="content">
        <p>{title}</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default Section2card;
