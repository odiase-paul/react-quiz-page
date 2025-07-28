import { Fragment, useContext, useEffect, useState } from "react";
import "./quizPage.css";

import { QuestionsContext } from "../context/QuestionsContext";
const Button = () => {
  const [disableButtons, setDisableButtons] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const { currentQuestion, handleChange, questionNumber } =
    useContext(QuestionsContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDisableButtons(true);
    setTimeout(() => {
      setShowCorrect(true);
    }, 1500);
  };
  useEffect(() => {
    setSelectedOption(null);
    setShowCorrect(false);
    setDisableButtons(false);
  }, [questionNumber]);

  const getButtonColor = (option) => {
    if (showCorrect && option === currentQuestion.answer) return "green";
    if (option === selectedOption) return "yellow";
  };

  return (
    <Fragment>
      {currentQuestion &&
        currentQuestion.options.map((btn, i) => {
          return (
            <button
              disabled={disableButtons}
              className={`${getButtonColor(btn)}`}
              key={i}
              onClick={() => {
                handleChange(btn);
                handleOptionClick(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
    </Fragment>
  );
};

export default Button;
