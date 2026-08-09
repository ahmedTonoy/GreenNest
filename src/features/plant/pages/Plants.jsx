import { useLoaderData } from "react-router";
import PlantGrid from "../components/PlantGrid";

const Plants = () => {
  const plants = useLoaderData();
  return (
    <div className="my-10 md:my-15">
      <PlantGrid plants={plants} />
    </div>
  );
};

export default Plants;
