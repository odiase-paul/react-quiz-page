import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import "./background.css";
import { QuestionsContext } from "../context/QuestionsContext";

const Background = ({ image, title, bgColor, item }) => {
  const { handleCategoryClick } = useContext(QuestionsContext);
  return (
    <Fragment>
      <Link
        to={`/${item.id}`}
        className="category-container"
        onClick={() => handleCategoryClick(item)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <button className="startQuiz">View Quiz</button>
          <div
            style={{ background: bgColor }}
            className="category-body-container"
          >
            <h2 className="" style={{ color: "" }}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Background;
