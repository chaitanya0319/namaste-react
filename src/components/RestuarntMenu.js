import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RestaurantList } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
        RestaurantList
    );
    const json = await data.json();
    setResInfo(json);
  };

  if (!resInfo) return <Shimmer />;
  console.log(resInfo);

  const restaurant =
    resInfo?.data?.data?.cards?.[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants?.find(
        (res) => res.info.id === resId
      );

  const { name, cuisines, costForTwo } = restaurant?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantMenu;
