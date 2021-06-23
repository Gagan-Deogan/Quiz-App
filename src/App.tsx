import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Quiz } from "./Pages/Quiz";
import { Signup } from "Pages/Signup";
import { Interceptor } from "Components/Interceptor";
import { BetterRoute } from "Components/BetterRoute";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Interceptor />
      <Routes>
        <BetterRoute type="PUBLIC-ONLY" path="/" element={<Login />} />
        <BetterRoute type="PUBLIC-ONLY" path="/signup" element={<Signup />} />
        <BetterRoute type="PROTECTED" path="/home" element={<Home />} />
        <BetterRoute type="PROTECTED" path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </div>
  );
};
