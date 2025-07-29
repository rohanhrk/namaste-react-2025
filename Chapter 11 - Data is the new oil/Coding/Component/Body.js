import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../Utils/useRestaurants";
import { EnhanceRestaurantCard } from "./RestaurantCard";

// Body Component for body section: It contains all restaurant cards
// we are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = ({ restImage }) => {
  const [
    restaurantsList,
    filteredRestaurantList,
    typedText,
    filterRestaurant,
    searchrestaurants,
    setTypedText,
  ] = useRestaurants();

  // Enhancement Resstaurant Card
  const NewRestaurantCard = EnhanceRestaurantCard(RestaurantCard);

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6 mt-2">
      <div className="flex justify-center gap-12">
        <div className="flex  focus:border-sky-700 gap-2">
          <input
            type="text"
            className="select-none border-1 border-blue-500 rounded-2xl px-2 focus:outline-sky-500 w-86"
            placeholder="type text"
            value={typedText}
            onChange={(e) => {
              setTypedText(e.target.value);
            }}
          />
          <button
            className="select-none rounded-lg px-3 py-2 text-sm font-medium bg-sky-500 text-white hover:bg-sky-800 hover:cursor-pointer"
            onClick={searchrestaurants}
          >
            Search
          </button>
        </div>
        <button
          className="select-none rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white hover:bg-gray-900 hover:cursor-pointer"
          onClick={filterRestaurant}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="select-none mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ===
            undefined ? (
              <RestaurantCard
                restaurantData={restaurant}
                restImage={restImage}
              />
            ) : (
              <NewRestaurantCard
                restaurantData={restaurant}
                restImage={restImage}
                header={restaurant?.info?.aggregatedDiscountInfoV3?.header}
                subheader={restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
