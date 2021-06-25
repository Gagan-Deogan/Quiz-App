import { useEffect } from "react";
import { Card } from "./Card";
import { useQuizzez } from "Context/QuizziesProvider";
import { useAuth } from "Context/AuthProvider";
import { Loader } from "Components/Loader";
import { getPlaylist } from "./home.services";
import { Button } from "Components/Button";
export const Home = () => {
  const { quizzes, status, setQuizzes, setStatus } = useQuizzez();
  const { user } = useAuth();
  useEffect(() => {
    if (status === "IDLE") {
      (async () => {
        setStatus("PENDING");
        const res = await getPlaylist();
        if ("data" in res) {
          setStatus("FULFILLED");
          return setQuizzes(res.data);
        } else {
          setStatus("ERROR");
        }
      })();
    }
  }, [setQuizzes, setStatus, status]);
  return (
    <>
      <section className="lg:container mx-auto px-3">
        {status === "PENDING" && <Loader></Loader>}
        {status === "FULFILLED" && (
          <>
            {user && (
              <h1 className="mt-6 mb-8 text-3xl md:text-4xl">
                Welcome {user.username}
              </h1>
            )}
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
              {quizzes?.map((quiz) => (
                <Card quiz={quiz} key={quiz._id} />
              ))}
            </ul>
          </>
        )}
        {status === "ERROR" && (
          <div className="w-full">
            <h1 className="text-center text-xl mt-16">
              There is some Problem Please try Again Later.
            </h1>
            <Button
              varient="FILLED"
              size="lg"
              className="m-auto mt-4"
              onClick={() => setStatus("IDLE")}>
              Retry
            </Button>
          </div>
        )}
      </section>
    </>
  );
};
