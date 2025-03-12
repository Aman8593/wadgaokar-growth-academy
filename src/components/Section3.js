import React from "react";
import "../styles/Section3.scss";
import Section3Cards from "./Section3-cards";

const Section3Comp = () => {
  const courseData = [
    {
      id: 1,
      imageUrl: "/images/course1.jpg",
      title: "Free Demo",
      description: "A Unique Price Action Trading for Wealth Creation",
      subText: "Candlestic Pattern,Technical Analysis, Chart Pattern",
    },
    {
      id: 2,
      imageUrl: "/images/course2.jpg",
      title: "Basic Price Action",
      description: "One Day Before Stock Selection",
      subText: "Real time Scanner for Stock Selection with Trade Strategies",
    },
    {
      id: 3,
      imageUrl: "/images/course3.jpg",
      title: "Advance Price Action",
      description: "Advance Trading Setup",
      subText:
        "Trading Setup with Scanner and advanced strategis and trading view Scripts",
    },
  ];
  return (
    <div className="section3-container">
      <div className="sect3-heading">
        <h2>Our popular courses</h2>
      </div>

      <div className="sect3-cards-container">
        <div className="sect3-cards-wrapper">
          {courseData.map((data, index) => {
            return (
              <Section3Cards
                imageUrl={data?.imageUrl}
                title={data?.title}
                description={data?.description}
                subText={data?.subText}
                key={index}
                id={data?.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3Comp;
