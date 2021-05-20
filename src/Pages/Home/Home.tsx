import { Card } from "../../Components/Card";

export const Home = () => {
  return (
    <>
      <section className="lg:container mx-auto px-3">
        <h1 className="font-sans text-5xl pt-5">Welcome Gagandeep Singh </h1>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </section>
    </>
  );
};
