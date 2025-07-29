import RestaurantCard from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../Utils/useRestaurants";

// Body Component for body section: It contains all restaurant cards
// we are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = ({ restImage }) => {
  const [restaurantsList, filteredRestaurantList, typedText, filterRestaurant, searchrestaurants, setTypedText] = useRestaurants();
 

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
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurantCard restaurantData={restaurant} restImage={restImage} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
