import React from "react";
import { useState } from "react";
import "../style/quiz.css";

const QuestionYN = ({ qnum, question, answerHandler }) => {
  const scores = {
    Yes: 3,
    No: 0,
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
    answerHandler(qnum - 1, scores[event.target.value]);
  };

  return (
    <div>
      <div className='question'>
        <p className='question-text'>
          {qnum}
          {") "}
          {question}
        </p>

        <div className='answer-options'>
          <div>
            <input
              type='radio'
              id='choice1'
              name={"choice" + qnum}
              checked={selectedOption === "Yes"}
              onChange={handleOptionChange}
              value={"Yes"}
            />
            <label className='answer-option' htmlFor='choice1'>
              Yes
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='choice2'
              name={"choice" + qnum}
              checked={selectedOption === "No"}
              onChange={handleOptionChange}
              value={"No"}
            />
            <label className='answer-option' htmlFor='choice2'>
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionYN;
