import { useLoaderData } from "react-router";
import Hero from "../components/hero/Hero";
import PlantSection from "../components/PlantSection/PlantSection";

const Home = () => {
  const { plantsData, careTipsData, expertsData } = useLoaderData();

  return (
    <div>
      <section className="mt-7 mb-10 md:mt-10 md:mb-15">
        <Hero />
      </section>
      <section className="my-5 md:my-10">
        <PlantSection plantsData={plantsData} />
      </section>
    </div>
  );
};

export default Home;
