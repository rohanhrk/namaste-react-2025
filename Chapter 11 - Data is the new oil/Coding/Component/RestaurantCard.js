const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName, id } =
    props.restaurantData.info;
  const { slaString } = props.restaurantData.info.sla;
  return (
    <div className="group pl-2 pt-2">
      <img
        className="aspect-square w-full rounded-2xl bg-gray-200 object-cover lg:aspect-auto lg:h-80"
        src={props.restImage + cloudinaryImageId}
      />
      <h2 className="text-sm mt-2 font-medium text-gray-900">{name}</h2>
      <div className="mt-1 flex justify-between">
        <h3 className="mt-1 text-sm text-gray-500">{avgRating}</h3>
        <h3 className="mt-1 text-sm text-gray-500">{slaString}</h3>
      </div>
      <p className="mt-1 text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
      <h4 className="mt-1 text-sm text-gray-500">{areaName}</h4>
    </div>
  );
};

export const EnhanceRestaurantCard = (RestaurantCard) => {
  return (props) => {
    const {header, subheader} = props;
    return (  
      <div className="relative">
        <label className = "absolute px-2 bg-gray-900 top-0 rounded-md text-white text-xl font-bold">{header} {subheader}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
