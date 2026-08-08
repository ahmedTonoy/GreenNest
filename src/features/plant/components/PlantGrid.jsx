import PlantCard from "./PlantCard";

const PlantGrid = ({ plants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-10">
      {plants.map((plant) => (
        <PlantCard key={plant.plantId} plant={plant} />
      ))}
    </div>
  );
};

export default PlantGrid;
