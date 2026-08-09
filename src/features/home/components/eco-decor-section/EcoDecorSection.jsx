import SectionHeadings from "../../../../shared/components/ui/SectionHeadings";
import EcoDecorGrid from "./EcoDecorGrid";

const EcoDecorSection = ({ ecoDecorIdeas }) => {
  return (
    <div id="eco-decor">
      <SectionHeadings
        sectionTitle={"🏡 Nature Meets Interior Design"}
        sectionParagraph={
          "Explore inspiring ways to decorate your living spaces with beautiful indoor plants that create a greener and more relaxing atmosphere."
        }
      />
      <EcoDecorGrid ecoDecorIdeas={ecoDecorIdeas} />
    </div>
  );
};

export default EcoDecorSection;
