import { Card } from "../../Components/Card";
import { useQuizzez } from "../../Context/QuizziesContext";

export const Home = () => {
  const { quizzes } = useQuizzez();
  console.log(quizzes);
  return (
    <>
      <section className="lg:container mx-auto px-3">
        <h1 className="font-sans text-5xl pt-5">Welcome Gagandeep Singh </h1>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
          {quizzes?.map((quiz) => (
            <Card quiz={quiz} />
          ))}
          {/* 
          <Card />
          <Card />
          <Card /> */}
        </ul>
      </section>
    </>
  );
};
