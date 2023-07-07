import { IMAGE_URL } from "../constants";

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

const Card = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      {cloudinaryImageId && (
        <img src={`${IMAGE_URL}/${cloudinaryImageId}`} alt="card image"></img>
      )}
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>
        {isNumeric(avgRating) ? avgRating + " Stars" : "No Ratings yet!"}{" "}
      </h4>
    </div>
  );
};

export default Card;
