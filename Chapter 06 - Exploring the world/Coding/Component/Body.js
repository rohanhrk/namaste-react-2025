import { useEffect, useState } from "react";
import restaurantsListObj from "../Utils/mockData";
import RestaurantCard from "./RestCard";
import Shimmer from "./Shimmer";

// Body Component for body section: It contains all restaurant cards
// we are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = ({ restImage }) => {
  let [restaurantsList, setRestaurantsList] = useState([]);
  let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  let [typedText, setTypedText] = useState("");

  useEffect(() => {
    console.log("body rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14936&lng=91.810809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const respose = await fetch(url);
    const json = await respose.json();
    console.log(json);

    setRestaurantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterRestaurant = () => {
    const filteredRestaurant = restaurantsList.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.4;
    });
    setFilteredRestaurantList(filteredRestaurant);
  };

  const searchrestaurants = () => {
    const filteredRestaurants = restaurantsList.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(typedText.toLowerCase());
    });

    setFilteredRestaurantList(filteredRestaurants);
    setTypedText(""); 
  };

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="input-container">
          <input
            type="text"
            value={typedText} 
            onChange={(e) => {
              setTypedText(e.target.value);
              console.log(typedText);
            }}
          />
          <button onClick={searchrestaurants}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantList.map((restaurant, index) => (
          <RestaurantCard
            restaurantData={restaurant}
            key={restaurant.info.id}
            restImage={restImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
