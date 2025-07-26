import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/z/food-delivery-icon-vector-set-takeaway-food-illustration-sign-collection-fast-food-symbol-logo-food-delivery-icon-vector-set-390008887.jpg?ct=jpeg" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-img" src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1660222265/nvqw9n7r2dthi0w8f6di.jpg"/>
            <h4>Meghana Foods</h4>
            <h5>Briyani, North Indian, Asian</h5>
            <h5>* 4.4</h5>
            <h5>38 min</h5>
        </div>
    );
}

const Body =() => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);