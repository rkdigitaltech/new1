import React from "react";
import { useState } from "react";
import "../App.css";

const Question = ({ qnum, question, answerHandler }) => {
  const scores = {
    Always: 3,
    Usually: 2,
    Sometime: 1,
    Never: 0,
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
        {/* <div>{qnum}|</div>
        <div>{question}</div> */}

        <div className='answer-options'>
          <div>
            <input
              type='radio'
              id='choice1'
              name={"choice" + qnum}
              checked={selectedOption === "Always"}
              onChange={handleOptionChange}
              value={"Always"}
            />
            <label className='answer-option' htmlFor='choice1'>
              Always
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='choice2'
              name={"choice" + qnum}
              checked={selectedOption === "Usually"}
              onChange={handleOptionChange}
              value={"Usually"}
            />
            <label className='answer-option' htmlFor='choice2'>
              Usually
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='choice3'
              name={"choice" + qnum}
              checked={selectedOption === "Sometime"}
              onChange={handleOptionChange}
              value={"Sometime"}
            />
            <label className='answer-option' htmlFor='choice3'>
              Sometime
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='choice4'
              name={"choice" + qnum}
              checked={selectedOption === "Never"}
              onChange={handleOptionChange}
              value={"Never"}
            />
            <label className='answer-option' htmlFor='choice4'>
              Never
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
