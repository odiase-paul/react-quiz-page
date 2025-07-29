import "./landing.css";
import Background from "../background/background";
import { Fragment } from "react";
import { Categories } from "../ReuseableComponent/CategoriesList";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landingPage">
        <p className="landing-page-introduction">
          Challenge your mind, learn something new, and have fun doing it!
          Quizakh is your go-to platform for exciting quizzes across a wide
          range of topics from general knowledge and sports to entertainment,
          geography, science, and more. Whether you're here to test your skills,
          compete with friends, or just pass the time, we've got something for
          everyone. Each quiz is designed to be quick, engaging, and
          informative. Pick a category, take a quiz, and see how much you really
          know!
        </p>
        <div className="landingPage-start-quiz">
          <h2>Categories</h2>
          <p>
            Click on any of the category to <br />
            <span>Start Quiz</span>
          </p>
        </div>

        <div className="display-container">
          {Categories.map((item) => (
            <Background
              bgColor={item.bgColor}
              image={item.imageCategory}
              title={item.title}
              route={item.route}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
