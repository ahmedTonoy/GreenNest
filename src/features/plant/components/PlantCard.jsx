import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlantCard = ({ plant }) => {
  const { plantName, price, rating, tnImage, category } = plant;
  return (
    <div className="card bg-base-100 shadow-sm relative transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl rounded-[42%_42%_22%_22%/12%_12%_38%_38%] border border-accent/35">
      <figure className="w-full p-3">
        <img
          className="w-full h-80 object-cover rounded-[60%_60%_5%_5%/18%_18%_4%_4%]"
          src={tnImage}
          alt={`Image of ${plantName}`}
        />
      </figure>
      <div className="card-body -mt-5">
        <h2 className="card-title md:text-xl">
          {plantName}
          <div className="badge badge-secondary absolute top-14 left-7">
            {category}
          </div>
        </h2>
        <div className="flex justify-between mb-2">
          <span className="font-bold text-lg">
            <FontAwesomeIcon icon={faDollarSign} />
            {price}
          </span>
          <span className="font-bold text-lg">
            <span className="mr-2">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  className={
                    index + 1 < rating ? "text-orange-400" : "text-gray-300"
                  }
                  icon={faStar}
                />
              ))}
            </span>
            {rating}
          </span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
