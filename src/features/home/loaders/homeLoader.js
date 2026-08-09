export const homeLoader = async () => {
  const [plantsData, careTipsData, expertsData, ecoDecorIdeas] = await Promise.all([
    fetch('/plantsData.json').then((res) => res.json()),
    fetch('/careTipsData.json').then((res) => res.json()),
    fetch('/expertsData.json').then((res) => res.json()),
    fetch('/ecoDecorIdeas.json').then((res) => res.json()),
  ]);

  return {plantsData, careTipsData, expertsData, ecoDecorIdeas};
}