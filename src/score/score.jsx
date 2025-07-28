import { Fragment, useContext } from "react";
import "./score.css";
import { QuestionsContext } from "../context/QuestionsContext";

const ScoreApp = () => {
  const {
    finalScore,
    refreshFinalScore,
    filteredQuestions,
    numberOfQuizQuestion,
  } = useContext(QuestionsContext);

  const handleRestartHere = () => {
    refreshFinalScore();
  };

  return (
    <Fragment>
      <div className="final-score-result">
        <div style={{ marginTop: "30px" }} className="end-result">
          <h2>Completed!🎇</h2>
        </div>
        <div className="score">
          <p>Well done!</p>
          <p>
            You answered <span className="score-number">{finalScore}</span> of{" "}
            <span className="score-number">
              {numberOfQuizQuestion.length || filteredQuestions.length}
            </span>{" "}
            correctly
          </p>
        </div>

        <div className="back-to-menu">
          <button onClick={handleRestartHere}>Back to Menu</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ScoreApp;
