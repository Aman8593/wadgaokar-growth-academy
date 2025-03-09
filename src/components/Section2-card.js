import Image from "next/image";
import React from "react";
import "../styles/Section2-card.scss"
const Section2card = ({imageUrl,title,description}) => {
  return (
    <div className="card">
      <div className="icon-container">
        <Image
          src={imageUrl}
          alt="Icon"
          width={100}
          height={100}
          className="icon"
        />
      </div>
      <div className="content">
        <p>{title}</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default Section2card;
