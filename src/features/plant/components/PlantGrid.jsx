import PlantCard from "./PlantCard";

const PlantGrid = ({ plants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-5 md:gap-7">
      {plants.map((plant) => (
        <PlantCard key={plant.plantId} plant={plant} />
      ))}
    </div>
  );
};

export default PlantGrid;
