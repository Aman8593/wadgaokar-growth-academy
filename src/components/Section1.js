import React from "react";
import "../styles/Section1.scss";
import { Carousel } from "antd";
import Image from "next/image";

const Section1Comp = () => {
  const images = [
    "/images/sect1-img.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
  ];
  return (
    <div className="section1">
      <div className="section1-container">
        <Carousel autoplay arrows autoplaySpeed={2000} dots infinite>
          {images.map((src, index) => (
            <div key={index} className="carousel-slide">
              <Image
                src={src}
                height={800}
                width={1200}
                alt={`Slide ${index + 1}`}
                // Adjust as needed
                layout="intrinsic"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section1Comp;
