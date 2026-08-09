import { useLoaderData } from "react-router";
import Hero from "../components/hero/Hero";
import PlantSection from "../components/plant-section/PlantSection";
import CareTipsSection from "../components/care-tips-section/CareTipsSection";
import ExpertsSection from "../components/experts-section/ExpertsSection";
import EcoDecorSection from "../components/eco-decor-section/EcoDecorSection";

const Home = () => {
  const { plantsData, careTipsData, expertsData, ecoDecorIdeas } =
    useLoaderData();

  return (
    <div>
      <section className="mt-7 mb-15 md:mt-10 md:mb-20">
        <Hero />
      </section>
      <section className="my-15 md:my-20">
        <PlantSection plantsData={plantsData} />
      </section>
      <section className="my-15 md:my-20">
        <CareTipsSection careTipsData={careTipsData} />
      </section>
      <section className="my-15 md:my-20">
        <ExpertsSection expertsData={expertsData} />
      </section>
      <section className="my-15 md:my-20">
        <EcoDecorSection ecoDecorIdeas={ecoDecorIdeas} />
      </section>
    </div>
  );
};

export default Home;
