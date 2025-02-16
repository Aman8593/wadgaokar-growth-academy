"use client";
import { Carousel } from "antd";
import Image from "next/image";
import "./global.scss";

export default function Home() {
  const images = [
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
    "/images/homepg-img1.jpg",
  ];

  return (
    <div className="section1">
      <div className="section1-cont">
        <Carousel autoplay arrows autoplaySpeed={2000} dots infinite>
          {images.map((src, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={src}
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
}
