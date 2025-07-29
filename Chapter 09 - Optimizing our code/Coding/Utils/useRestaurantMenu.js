import { restMenuAPI } from "../Utils/constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
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

  return [restaurantDetails,restaurantItems];
};

export default useRestaurantMenu;
