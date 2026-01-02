import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) return null; // 🛡 safety guard

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData.info;

  return (
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
  );
};

export default RestaurantCard;
