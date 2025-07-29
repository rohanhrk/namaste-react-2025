import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName, id } =
    props.restaurantData.info;
  console.log(id);
  const { slaString } = props.restaurantData.info.sla;
  return (
    <div className="group relative">
      <img
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        src={props.restImage + cloudinaryImageId}
      />
      <h2 className="text-sm mt-2 font-medium text-gray-900">{name}</h2>
      <div className="mt-1 flex justify-between">
        <h3 className="mt-1 text-sm text-gray-500">{avgRating}</h3>
        <h3 className="mt-1 text-sm text-gray-500">{slaString}</h3>
      </div>
      <p className="mt-1 text-sm text-gray-500">{cuisines.join(", ")}</p>
      <h4 className="mt-1 text-sm text-gray-500">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
