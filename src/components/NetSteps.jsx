import React from "react";
import "../App.css";

const nextStepsData = {
  "0-30": [
    "Learn how to set a budget you can stick to.",
    "Find out how much you can, and should, save.",
    "Set some financial goals and lear how to get there.",
    "Calculate how quickly you can pay off your credit card debt.",
    "Make a realistic plan for investing.",
    "Learn the basics about insurance.",
  ],
  "31-50": [
    "Learn how to set a budget you can stick to.",
    "Find out how much you can, and should, save.",
    "Set some financial goals and lear how to get there.",
    "Calculate how quickly you can pay off your credit card debt.",
    "Make a realistic plan for investing.",
    "Learn the basics about insurance.",
  ],
  "51-70": [
    "Figure out your personal net worth.",
    "Create an emergency savings fund to be sure you're covered.",
    "Keep track of your spending with our interactive tools.",
    "Learn how to be smart about credit and debt.",
    "See how investing works and how it can work for you.",
    "Learn the basics about insurance.",
  ],
  "71-90": [
    "Get your budget on track with our planning tool.",
    "Create an emergency savings fund to be sure you're covered.",
    "Make saving a no-brainer with these eight fundamentals.",
    "See how much your debt is really costing you.",
    "See how investing works and how it can work for you.",
    "Get a head start on estate planning.",
  ],
  "91-100": [
    "Figure out your personal net worth.",
    "Do the math to see how saving can help you meet your goals.",
    "Make saving a no-brainer with these eight fundamentals.",
    "Learn the difference between good debt and bad debt.",
    "See how investing works and how it can work for you.",
    "Get a head start on estate planning.",
  ],
};

const NetSteps = ({ score }) => {
  const scoreRange = (score) => {
    if (score >= 91) return "91-100";
    if (score >= 71) return "71-90";
    if (score >= 51) return "51-70";
    if (score >= 31) return "31-50";
    return "0-30";
  };

  return (
    <div className='question-text'>
      {nextStepsData[scoreRange(score)].map((step, index) => (
        <p key={index}>{step}</p>
      ))}
      <p>-----------------------------------------------------------------</p>
    </div>
  );
};

export default NetSteps;
