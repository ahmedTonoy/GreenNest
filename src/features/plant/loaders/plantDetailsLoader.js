const plantDetailsLoader = async ({ params }) => {
  const { plantId } = params;

  const response = await fetch("/plantsData.json");

  if (!response.ok) {
    throw new Response("Failed to load data", {
      status: response.status,
    });
  }

  const plantsData = await response.json();

  const targetPlant = plantsData.find(
    (plant) => plant.plantId === Number(plantId),
  );

  if (!targetPlant) {
    throw new Response("Plant not Found", {
      status: 404,
      statusText: "Plant Not Found",
    });
  }

  return targetPlant;
};

export default plantDetailsLoader;
