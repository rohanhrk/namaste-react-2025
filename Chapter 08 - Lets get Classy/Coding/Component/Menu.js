import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { restMenuAPI } from "../Utils/constant";

const Menu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurantItems, setRestaurantItems] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = restMenuAPI + param.restId;
    const respose = await fetch(url);
    const json = await respose.json();
    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
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
