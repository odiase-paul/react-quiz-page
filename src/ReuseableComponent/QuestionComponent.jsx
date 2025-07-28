import React, { useContext, useEffect } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import Button from "../quiz-page/button";
import { Categories } from "./CategoriesList";
import { useParams } from "react-router-dom";
import { QuestionPack } from "../Questions/QuestionPack";

const QuestionComponent = () => {
  const { categoryId } = useParams();

  const {
    selectedCategory,
    quizStarted,
    startQuiz,
    currentQuestion,
    changeClass,
    questionNumber,
    setSelectedCategory,
    setQuestionNumber,
    setRandomQuestionNumber,
    setRandomArray,
    setFinalScore,
    filteredQuestions,
    numberOfQuizQuestion,
  } = useContext(QuestionsContext);

  useEffect(() => {
    if (categoryId) {
      const category = Categories.find((cat) => cat.id === categoryId);
      if (category) {
        setSelectedCategory(category);
        const shuffled = [...QuestionPack].sort(() => 0.5 - Math.random());
        setRandomArray(shuffled);
        setRandomQuestionNumber(0);
        setQuestionNumber(1);
        setFinalScore(0);
      }
    }
  }, [categoryId]);

  return (
    <div className="entire-quiz-page">
      {selectedCategory && !quizStarted && (
        <div className="introduction-to-quiz">
          <h2>
            Category &rarr;
            <span style={{ color: "#b8860b" }}> {selectedCategory.title}</span>
          </h2>
          <p>{selectedCategory.description}</p>
          <p className="number-of-question">
            Number of Questions &rarr;{" "}
            {numberOfQuizQuestion.length || filteredQuestions.length}
          </p>
          <button
            onClick={startQuiz}
            style={{ padding: "10px", marginTop: "10px" }}
          >
            Start Quiz
          </button>
        </div>
      )}
      {quizStarted && (
        <div className="quiz-question-page">
          <h2>{selectedCategory.title} Quiz</h2>
          <div className="faq-container">
            <div className="question-div">
              <p className="question-number">{`${
                questionNumber === numberOfQuizQuestion.length &&
                filteredQuestions.length
                  ? "Final Question"
                  : `Question ${questionNumber}`
              } `}</p>
              <div className="current-question-div">
                <p className="question">
                  {currentQuestion && currentQuestion.question}
                </p>
              </div>
            </div>
            <div className="buttons">
              <Button />
            </div>
            <div className="display-answer">
              <p className={`${changeClass} select-color`}>{changeClass}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
