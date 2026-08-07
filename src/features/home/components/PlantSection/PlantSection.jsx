import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeadings from "../../../../shared/components/ui/SectionHeadings";
import PlantGrid from "../../../plant/components/PlantGrid";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const PlantSection = ({ plantsData }) => {
  const featuredPlants = plantsData.slice(0, 6);
  return (
    <div className="my-5">
      <SectionHeadings
        sectionTitle={"🌿 Find Your Green Companion"}
        sectionParagraph={
          "Discover our carefully selected collection of healthy indoor plants that bring freshness, beauty, and calm to every corner of your home."
        }
      />
      <PlantGrid plants={featuredPlants} />
      <div className="flex justify-center mt-4">
        <Link to={"/plants"}>
          <button className="btn btn-outline rounded-full mt-5">
            {" "}
            <div className="border-r">
              <FontAwesomeIcon className="mr-2" icon={faEye} />
            </div>{" "}
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantSection;
