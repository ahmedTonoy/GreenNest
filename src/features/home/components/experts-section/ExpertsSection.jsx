import { useState } from "react";
import SectionHeadings from "../../../../shared/components/ui/SectionHeadings";
import ExpertCard from "./ExpertCard";

const ExpertsSection = ({ expertsData }) => {
  const [openedCard, setOpenedCard] = useState(null);

  return (
    <div id="experts">
      <SectionHeadings
        sectionTitle={"👩‍🌾 Expert Guidance, Anytime"}
        sectionParagraph={
          "Connect with experienced plant specialists for personalized advice, diagnosis, and care recommendations tailored to your plants."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 bg-base-100">
        {expertsData.map((expert) => (
          <ExpertCard
            key={expert.expertId}
            expert={expert}
            opened={openedCard === expert.expertId}
            onToggle={() =>
              setOpenedCard(
                openedCard === expert.expertId ? null : expert.expertId,
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertsSection;
