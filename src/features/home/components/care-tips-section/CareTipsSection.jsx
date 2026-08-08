import SectionHeadings from "../../../../shared/components/ui/SectionHeadings";
import CareTipsCard from "./CareTipsCard";

const CareTipsSection = ({ careTipsData }) => {
  return (
    <div className="my-5">
      <SectionHeadings
        sectionTitle={"🌱 Grow with Confidence"}
        sectionParagraph={
          "Learn simple yet effective care techniques to keep your indoor plants healthy, vibrant, and thriving throughout every season."
        }
      />
      <div className="grid grid-cols-1 gap-5">
        {careTipsData.map((careTip) => (
          <CareTipsCard key={careTip.tipId} careTip={careTip} />
        ))}
      </div>
    </div>
  );
};

export default CareTipsSection;
