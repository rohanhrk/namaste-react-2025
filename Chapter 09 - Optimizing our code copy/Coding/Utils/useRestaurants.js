import { useState, useEffect } from "react";
import { swiggyAPI } from "./constant";

const useRestaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = swiggyAPI;
    const respose = await fetch(url);
    const json = await respose.json();

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

  return [
    restaurantsList,
    filteredRestaurantList,
    typedText,
    filterRestaurant,
    searchrestaurants,
    setTypedText
  ];
};

export default useRestaurants;
