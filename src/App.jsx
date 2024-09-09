import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quiz from "./pages/QuizPage";
import QuizPage from "./pages/QuizPage";
import Results from "./pages/Results";
import BarChart from "./components/BarChat";
import finLogo from "./assets/finculcatelogo.svg";
import finLetterLogo from "./assets/finculcate_letters.svg";

function App() {
  const QUIZ_PAGE = 1;
  const RESULTS_PAGE = 2;

  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [currPage, setCurrPage] = useState(QUIZ_PAGE);

  const answerHandler = (index, value) => {
    let newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    console.log(answers);
  };

  const pageChangeHandler = (page) => {
    if (page === QUIZ_PAGE) {
      setAnswers([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      console.log(answers);
    }
    setCurrPage(page);
  };

  return (
    <>
      <div className='header_container'>
        <img
          src={finLogo}
          style={{ width: "96px", height: "96px", marginLeft: "15px" }}
          alt='logo'
        />
      </div>

      {currPage === QUIZ_PAGE ? (
        <QuizPage
          answerHandler={answerHandler}
          pageChangeHandler={pageChangeHandler}
        />
      ) : (
        <Results pageChangeHandler={pageChangeHandler} answers={answers} />
      )}
    </>
  );
}

export default App;
