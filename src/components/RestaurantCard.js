import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) return null;

  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData.info;

  return (
    <Link to={`/restaurants/${id}`} className="res-card-link">
      <div className="res-card m-4 p-4 w-56 border border-gray-200">
        <img
          className="res-logo w-full"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
