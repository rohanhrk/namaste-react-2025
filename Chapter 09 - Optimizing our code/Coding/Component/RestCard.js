import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName, id } =
    props.restaurantData.info;
  console.log(id);
  const { slaString } = props.restaurantData.info.sla;
  return (
      <div className="restaurant-card-component">
        <img
          className="restaurant-image"
          src={props.restImage + cloudinaryImageId}
        />
        <h2 className="restaurant-name">{name}</h2>
        <div className="rating-delivery-time-container">
          <div className="rating-container">
            <span className="fa fa-star checked"></span>
            <h4>{avgRating}</h4>
          </div>
          <h4>{slaString}</h4>
        </div>
        <h4 className="restaurant-cuisines">{cuisines.join(", ")}</h4>
        <h4 className="restaurant-area-container">{areaName}</h4>
      </div>
  );
};

export default RestaurantCard;
