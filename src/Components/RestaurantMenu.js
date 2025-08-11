import { useState, useEffect } from "react";
import { RES_MENU } from "./utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);

    console.log(RES_MENU + resId);
    const json = await data.json();

    console.log("params :" + resId);
    console.log(json);

    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
  };

  if (restaurantDetails === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    restaurantDetails;

  const { itemCards } = restaurantMenu;

  console.log(itemCards);

  return (
    <div className="menu">
      <div className="res-details">
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{totalRatingsString}</h3>
      </div>
      <div className="res-menu">
        <h2>Recommended</h2>
        <ul>
          {itemCards.map((item) => (
            <ul key={item?.card?.info?.name} className="menu-details">
              <li className="menu-name" key="name">
                {item?.card?.info?.name}
              </li>
              <li key="price">
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </li>
              <li key="rating">
                {item?.card?.info?.ratings?.aggregatedRating?.rating} -
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
              </li>
              <li key="des">{item?.card?.info?.description}</li>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
