export const homeLoader = async () => {
  const [plantsData, careTipsData, expertsData] = await Promise.all([
    fetch('/plantsData.json').then((res) => res.json()),
    fetch('/careTipsData.json').then((res) => res.json()),
    fetch('/expertsData.json').then((res) => res.json()),
  ]);

  return {plantsData, careTipsData, expertsData};
}