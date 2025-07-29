import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomArray, setRandomArray] = useState([]);
  const [randomQuestionNumber, setRandomQuestionNumber] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  let [questionNumber, setQuestionNumber] = useState(1);
  let [changeClass, setChangeClass] = useState("");
  const [finalScore, setFinalScore] = useState(0);

  const navigate = useNavigate();
  const navigateToHome = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  let filteredQuestions =
    selectedCategory?.id === "general"
      ? randomArray
      : randomArray.filter(
          (category) => category.category === selectedCategory?.id
        );

  let numberOfQuizQuestion =
    selectedCategory?.id === "general"
      ? filteredQuestions.slice(0, 40)
      : filteredQuestions.slice(0, 20);

  console.log("questions", filteredQuestions);

  const currentQuestion = filteredQuestions[randomQuestionNumber];

  const handleFinalScore = () => setFinalScore(finalScore + 1);

  const handleChange = (btn) => {
    if (
      questionNumber < numberOfQuizQuestion.length &&
      filteredQuestions.length
    ) {
      setTimeout(() => {
        setQuestionNumber((previousValue) => previousValue + 1);
        setRandomQuestionNumber(randomQuestionNumber + 1);
      }, 3500);
    } else {
      setTimeout(() => {
        navigate("/score");
      }, 3500);
    }

    if (currentQuestion.answer === btn) {
      handleFinalScore();
      setTimeout(() => {
        setChangeClass((changeClass = "Correct"));
      }, 1500);
    } else {
      setTimeout(() => {
        setChangeClass((changeClass = "Wrong"));
      }, 1500);
    }
    setTimeout(() => {
      setChangeClass((changeClass = ""));
    }, 3500);
  };

  const refreshFinalScore = () => {
    navigateToHome("/");
  };

  const value = {
    currentQuestion,
    filteredQuestions,
    numberOfQuizQuestion,
    startQuiz,
    handleCategoryClick,
    quizStarted,
    selectedCategory,
    handleChange,
    changeClass,
    questionNumber,
    finalScore,
    refreshFinalScore,
    setFinalScore,
    setSelectedCategory,
    setRandomArray,
    setRandomQuestionNumber,
    setQuestionNumber,
  };
  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};
