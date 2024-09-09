import React from "react";
import "../App.css";

const scoreBaseDescription = {
  "0-30":
    "Not quite there You are starting with a clean slate. That a good  place to be in. Get some tips and inculcate good habits from Finculcate to  get your finances in shape.",
  "31-50":
    "You're on top of some things, but some areas of your financial life need work.",
  "51-70":
    "You're on the right path! Now it's time to take a close look at where you need some help.",
  "71-90":
    "You're close! Add a few more good habits to your financial life, and you'll be in great shape.",
  "91-100":
    "Nice! You've got your debt under control, you're saving and you're keeping track of your finances. Now, learn how you can keep it up.",
};

const getScoreDescription = (score) => {
  if (score >= 91) return scoreBaseDescription["91-100"];
  if (score >= 71) return scoreBaseDescription["71-90"];
  if (score >= 51) return scoreBaseDescription["51-70"];
  if (score >= 31) return scoreBaseDescription["31-50"];
  return scoreBaseDescription["0-30"];
};

const ResultDetails = ({ score }) => {
  return (
    <div>
      <div>
        <p className='heading'>{score} Points</p>
      </div>
      <div className='question-text'>
        <p>{getScoreDescription(score)}</p>
        <p
          style={
            score > 90 ? { color: "rgb(218, 148, 18)", fontWeight: "bold" } : {}
          }>
          91 - 100 Excellent
        </p>
        <p
          style={
            score > 70 && score < 91
              ? { color: "rgb(218, 148, 18)", fontWeight: "bold" }
              : {}
          }>
          71 - 90 Good
        </p>
        <p
          style={
            score > 50 && score < 71
              ? { color: "rgb(218, 148, 18)", fontWeight: "bold" }
              : {}
          }>
          51 - 70 Right at the center
        </p>
        <p
          style={
            score > 30 && score < 51
              ? { color: "rgb(218, 148, 18)", fontWeight: "bold" }
              : {}
          }>
          31 - 50 Fair
        </p>
        <p
          style={
            score < 31 ? { color: "rgb(218, 148, 18)", fontWeight: "bold" } : {}
          }>
          0 - 30 Not quite there
        </p>
      </div>
    </div>
  );
};

export default ResultDetails;
