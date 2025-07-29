import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const Menu = () => {
  const [restaurantDetails, restaurantItems] = useRestaurantMenu();

  return restaurantDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-container">
      <div className="rest-details-container">
        <h1>{restaurantDetails.name}</h1>
        <h3>
          {restaurantDetails.avgRating} Star -{" "}
          {restaurantDetails.costForTwoMessage}
        </h3>
      </div>
      <div className="rest-menu-container">
        {restaurantItems.map((restItem) => (
          <MenuCard
            name={restItem?.card?.info?.name}
            price={restItem?.card?.info?.defaultPrice}
            rating={restItem?.card?.info?.ratings?.aggregatedRating?.rating}
            description={restItem?.card?.info?.description}
            imageId={restItem?.card?.info?.imageId}
            key={restItem?.card?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
