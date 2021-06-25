import { Navbar } from "common-components/Navbar";
import { Routes } from "react-router-dom";
import { useSnakbar } from "context/SnakbarProvider";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Quiz } from "./pages/Quiz";
import { Signup } from "pages/Signup";
import { LeaderBoard } from "pages/LeaderBoard";
import { BetterRoute } from "common-components/BetterRoute";
import { Snakbar } from "common-components/Snakbar";
import { Interceptor } from "common-components/Interceptor";

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
