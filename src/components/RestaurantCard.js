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
      <div className="res-card">
        <img
          className="res-logo"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
