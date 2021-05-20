import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Quiz } from "./Pages/Quiz";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:quizId" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
};
