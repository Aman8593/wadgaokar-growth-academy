import React from "react";
import "../../styles/AdvPriceAction.scss";
const AdvPriceAction = () => {
  const courseData = {
    column1: [
      "Basic of Stock Market",
      "Risk Management & Risk Reward Ratio",
      "Depth into the charts",
      "Mastering Trends for Swing & Intraday Trading",
      "Foundations of Price Action Trading",
      "Multi Time Frame Analysis",
      "Price Action Concepts for Intraday Trading",
      "Stock Selection One Day Before",
      "Blood Bath Trade Setup",
      "Micro SL Strategy to Minimize the Risk",
      "Membership of Premium Group for Real Time Support",
    ],
    column2: [
      "Stock Selection in Live Market",
      "How to Trade Breakouts",
      "How to Trade Fake Breakouts",
      "How to Trade Reversals",
      "Trade Setup",
      "Entry-1 Trade Setup",
      "Entry-2 Trade Setup",
      "Stock Scanner",
      "Live Support Sessions for Maximum Gains",
      "Emergency Braking System to Minimize the Risk",
      "Bullet Entry Trade Setup",
    ],
  };
  return (
    <div className="course-container">
      <div className="course-heading">
        <h2>Advance Price Action</h2>
      </div>

      <div class="course-container-content">
        <h2 class="title">Course Description</h2>
        <div class="course-grid">
          <ul class="course-column">
            {courseData.column1.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <ul class="course-column">
            {courseData.column2.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvPriceAction;
