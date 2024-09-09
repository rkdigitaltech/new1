import React from "react";
import Question from "../components/Question";
import QuestionYN from "../components/QuestionYN";
import "../style/quiz.css";

const QuizPage = ({ answerHandler, pageChangeHandler }) => {
  return (
    <div className='questions-container'>
      <div className='question'>
        <div className='heading'>Financial Fitness Quiz</div>
        <div className='subheading'>How fit are you?</div>
        <p className='statement'>
          Find out how you stack up by answering these 18 simple questions.
        </p>
      </div>

      {/* ------------------------------ */}
      <Question
        qnum={1}
        question={"I have enough money every month to pay my bills."}
        answerHandler={answerHandler}
      />
      <Question
        qnum={2}
        question={
          "I keep good records of important documents (e.g., tax forms, insurance policies and financial documents)."
        }
        answerHandler={answerHandler}
      />
      <Question
        qnum={3}
        question={
          "I have money set aside for an emergency (for example, if my car breaks down)"
        }
        answerHandler={answerHandler}
      />
      <Question
        qnum={4}
        question={
          "I have money set aside to cover at least a few months of living expenses if I lose my job or become disabled"
        }
        answerHandler={answerHandler}
      />
      {/* */}
      <Question
        qnum={5}
        question={"I pay close attention to my financial statements."}
        answerHandler={answerHandler}
      />
      <Question
        qnum={6}
        question={"Part of my income automatically goes to savings."}
        answerHandler={answerHandler}
      />
      <Question
        qnum={7}
        question={"I contribute to a retirement account."}
        answerHandler={answerHandler}
      />
      <Question
        qnum={8}
        question={"I pay off my credit card(s) in full every month."}
        answerHandler={answerHandler}
      />
      <Question
        qnum={9}
        question={
          "I know how much debt I have, including credit cards, mortgage, car loan, student loans, etc."
        }
        answerHandler={answerHandler}
      />
      <Question
        qnum={10}
        question={"My debt is manageable for me."}
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={11}
        question={"I have a good system for tracking my spending."}
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={12}
        question={
          "When it comes to investing, I understand how to diversify my money."
        }
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={13}
        question={"I have health insurance to cover my medical expenses."}
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={14}
        question={"I ve reviewed my credit report within the last 12 months."}
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={15}
        question={" have an up-to-date will."}
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={16}
        question={
          "I have insurance to cover me if I become disabled and can’t work."
        }
        answerHandler={answerHandler}
      />
      <QuestionYN
        qnum={17}
        question={"I know how much of my money goes to taxes."}
        answerHandler={answerHandler}
      />

      <button
        className='submit-button '
        onClick={() => {
          pageChangeHandler(2);
        }}>
        Show Results
      </button>

      {/* ------------------------------ */}
    </div>
  );
};

export default QuizPage;
