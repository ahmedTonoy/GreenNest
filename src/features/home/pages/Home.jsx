import { useLoaderData } from "react-router";
import Hero from "../components/hero/Hero";
import PlantSection from "../components/PlantSection/PlantSection";
import CareTipsSection from "../components/care-tips-section/CareTipsSection";
import ExpertsSection from "../components/experts-section/ExpertsSection";

const Home = () => {
  const { plantsData, careTipsData, expertsData } = useLoaderData();

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
    </div>
  );
};

export default Home;
