import React from "react";
import "../styles/Section2.scss";
import Image from "next/image";

const Section2Comp = () => {
  return (
    <div className="section2-container">
      <div className="sect2-heading">
        <h2>
          Change Your Financial Future With <br /> Courses on the Stock Market
        </h2>
      </div>
      <div className="sect2-title">
        <p>
          Achieving financial growth through trading requires the right
          knowledge and skills. Share market classes provide comprehensive
          training to help individuals understand market trends, investment
          strategies, and risk management techniques. These share market classes
          are designed to cater to beginners as well as experienced traders who
          want to enhance their expertise. With affordable and structured share
          market className fees, these programs ensure that learning valuable
          trading concepts is accessible to everyone. By gaining practical
          insights and expert guidance, participants can confidently navigate
          the market and work towards building wealth through informed trading
          decisions.
        </p>
      </div>
      <div className="sect2-cards-container">
        <div className="sect2-cards-wrapper">
          <div className="card">
            <div className="icon-container">
              <Image
                src="/images/card-1.jpg"
                alt="Icon"
                width={100}
                height={100}
                className="icon"
              />
            </div>
            <div className="content">
              <p>All Inclusive</p>
              <h3>Advance Your Job</h3>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <Image
                src="/images/card-1.jpg"
                alt="Icon"
                width={100}
                height={100}
                className="icon"
              />
            </div>
            <div className="content">
              <p>All Inclusive</p>
              <h3>Advance Your Job</h3>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <Image
                src="/images/card-1.jpg"
                alt="Icon"
                width={100}
                height={100}
                className="icon"
              />
            </div>
            <div className="content">
              <p>All Inclusive</p>
              <h3>Advance Your Job</h3>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <Image
                src="/images/card-1.jpg"
                alt="Icon"
                width={100}
                height={100}
                className="icon"
              />
            </div>
            <div className="content">
              <p>All Inclusive</p>
              <h3>Advance Your Job</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Comp;
