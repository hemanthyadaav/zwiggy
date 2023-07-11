import { IMAGE_URL } from "../constants";
import isNumeric from "../utils/isNumeric";

const Card = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card shadow-inner object-cover object-center h-auto p-4 mx-2 my-6 w-80 rounded-lg">
      {cloudinaryImageId && (
        <img
          src={`${IMAGE_URL}/${cloudinaryImageId}`}
          className="rounded-lg h-60"
          alt="card image"
        ></img>
      )}
      <h3 className="text-lg font-medium text-gray-900 ">{name}</h3>
      <div className="flex justify-between text-sm text-gray-700">
        <h4>{cuisines?.join(", ")}</h4>
        <h4>
          {isNumeric(avgRating) ? avgRating + "⭐" : "No Ratings yet!"}
        </h4>
      </div>
    </div>
  );
};

export default Card;
