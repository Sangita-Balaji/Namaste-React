import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {RES_LIST} from "./utils/constants";
import Shimmer from "./Shimmer";

const Body =() => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("body rendered");

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        console.log("api called");
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    if(listOfRestaurants.length === 0)
    return <Shimmer/>;

    return (
        <div className="body">
            <div className="search">
                <div className="search-bar">
                    <input className="search-box" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="search-btn" onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredRes = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredRes);
                }}>Top rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} res={restaurant}/>) 
                }
            </div>
        </div>
    );
}

export default Body;