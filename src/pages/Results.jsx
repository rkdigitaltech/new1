import React from "react";
import "../components/ResultDetails";
import ResultDetails from "../components/ResultDetails";
import BarChart from "../components/BarChat";
import NetSteps from "../components/NetSteps";
import { useEffect } from "react";

const Results = ({ pageChangeHandler, answers }) => {
  const calculateScore = (answers) => {
    let score = 0;
    answers.forEach((answer) => {
      score += answer;
    });
    console.log(score);
    let percentScore = (score / 51) * 100;
    percentScore = Math.round(percentScore);
    return percentScore;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='questions-container'>
      <div className='question'>
        <div className='heading'>Financial Fitness Quiz</div>
        <div className='subheading'>How fit are you?</div>
        <p className='statement'>
          Find out how you stack up by answering these 18 simple questions.
        </p>
      </div>
      <div className='heading'>Financial Fitness Score</div>
      <div style={{ width: "900px" }}>
        <div className='flex-container'>
          <div className='flex-item chart-container'>
            {/* <Bar data={data} width={100} height={100} options={options} /> */}
            <BarChart score={calculateScore(answers)} />
          </div>
          <div className='flex-item'>
            <ResultDetails score={calculateScore(answers)} />
          </div>
        </div>
      </div>
      <div lassName='question'>
        <p className='heading'>Next Steps</p>
        <p className='subheading'>Explore the next steps</p>
        <div className='question-text'>
          {/* <p>Learn how to set a budget you can stick to.</p>
          <p>Find out how much you can, and should, save.</p>
          <p>Set some financial goals and lear how to get there. </p>
          <p>Calculate how quickly you can pay off your credit card debt </p>
          <p>Make a realistic plan for investing </p>
          <p>Learn the basics about insurance </p>
          <p>
            -----------------------------------------------------------------
          </p> */}
          <NetSteps score={calculateScore(answers)} />
        </div>
        <div>
          <p className='heading'>
            If you would like us to assist you in building your<br></br>{" "}
            personal wealth, we are here
          </p>
          <div style={{ width: "400px" }}>
            <div className='flex-container'>
              <div className='flex-item question-text'>
                <p>
                  Gurumurthty Raman
                  <br />
                  9845011033
                  <br />
                  guru@finculcate.com
                </p>
              </div>
              <div className='flex-item question-text'>
                <p>
                  Koushik Varaghur
                  <br />
                  9845921095
                  <br />
                  koushik@finculcate.com
                </p>
              </div>
            </div>
          </div>
          <p className='question-text'>
            -----------------------------------------------------------------
          </p>
        </div>
        <div className='question-text'>
          <p className='heading'>
            If you are interested in partnering us to teach <br />
            financial literacy to children, reach us at
          </p>
          <div>
            <p>Koushik Varaghur</p>
            <p>9845921095</p>
            <p>koushik@finculcate.com</p>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => pageChangeHandler(1)}>Back to Quiz</button>
      </div>
    </div>
  );
};

export default Results;
