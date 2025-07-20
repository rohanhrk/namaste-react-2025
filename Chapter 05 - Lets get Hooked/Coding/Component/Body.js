import { useState } from "react";
import restaurantsListObj from "../Utils/mockData";
import RestaurantCard from "./RestCard";

// Body Component for body section: It contains all restaurant cards
// we are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = ({ restImage }) => {
  let [restaurantsList, setRestaurantsList] = useState(restaurantsListObj);

  const filterRestaurant = () => {
    const filteredRestaurant = restaurantsList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });
    setRestaurantsList(filteredRestaurant);
  };
  

  return (
    <div className="body-container">
      <div className="filter-container">
        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantsList.map((restaurant, index) => (
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
