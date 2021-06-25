import { Navbar } from "./Components/Navbar";
import { Routes } from "react-router-dom";
import { useSnakbar } from "Context/SnakbarProvider";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Quiz } from "./Pages/Quiz";
import { Signup } from "Pages/Signup";
import { LeaderBoard } from "Pages/LeaderBoard";
import { BetterRoute } from "Components/BetterRoute";
import { Snakbar } from "Components/Snakbar";
import { Interceptor } from "Components/Interceptor";

export const App = () => {
  const {
    state: { isShow },
  } = useSnakbar();
  return (
    <div className="App">
      <Interceptor />

      {isShow && <Snakbar />}
      {<Navbar />}
      <Routes>
        <BetterRoute type="PUBLIC-ONLY" path="/" element={<Login />} />
        <BetterRoute type="PUBLIC-ONLY" path="/signup" element={<Signup />} />
        <BetterRoute
          type="PROTECTED"
          path="/leaderboard"
          element={<LeaderBoard />}
        />
        <BetterRoute type="PROTECTED" path="/home" element={<Home />} />
        <BetterRoute type="PROTECTED" path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </div>
  );
};
