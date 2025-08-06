import React from "react";
import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const {res} = props;

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = res?.info;
    const {deliveryTime} = res?.info?.sla;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-img" 
            src={CDN_URL + cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>Cost {costForTwo}</h5>
            <h5>{deliveryTime} min</h5>
        </div>
    );
}

export default RestaurantCard;