import {
  faBookOpenReader,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const CareTipsCard = ({ careTip }) => {
  const { tipId, title, category, summary, readTime, image } = careTip;

  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" defaultChecked={tipId === 1} />
      <div className="collapse-title font-semibold">{title}</div>
      <div className="collapse-content text-sm">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5 md:mx-10">
          <div className="md:col-span-5 space-y-3">
            <div className="flex gap-4">
              <div className="badge badge-neutral">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-yellow-400"
                />
                <span>{category}</span>
              </div>
              <div className="badge badge-accent badge-outline">
                <FontAwesomeIcon icon={faBookOpenReader} />
                <span>{readTime}</span>
              </div>
            </div>
            <p>
              {summary}
              <Link to={`/read-tips/${tipId}`}>
                ..
                <span className="font-semibold text-accent">Learn Details</span>
              </Link>
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={image}
              className="w-full h-80 object-cover rounded-lg"
              alt="Plant tips image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTipsCard;
