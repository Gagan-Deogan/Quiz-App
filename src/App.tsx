import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Quiz } from "./Pages/Quiz";
import { Signup } from "Pages/Signup";
import { Interceptor } from "Components/Interceptor";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Interceptor />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz/:quizId" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
};
