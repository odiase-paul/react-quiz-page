import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./mediaQuery.css";

import ScoreApp from "./score/score";

import LandingPage from "./landing-page/landing-page";

import Footer from "./footer/footer";
import Navbar from "./NavBar/Navbar";
import QuestionComponent from "./ReuseableComponent/QuestionComponent";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:categoryId" element={<QuestionComponent />} />
          <Route path="score" element={<ScoreApp />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
