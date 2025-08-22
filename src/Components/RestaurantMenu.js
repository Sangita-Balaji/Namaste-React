import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log("parent component");

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
