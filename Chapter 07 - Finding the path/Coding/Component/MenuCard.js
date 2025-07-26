import { restMenuItemImage } from "../Utils/constant";

const MenuCard = (probs) => {
  const { name, price, rating, description, imageId } = probs;
  return (
    <div className="rest-menu-item-container">
      <div className="rest-menu-item">
        <h3 className="menu-item-name">{name}</h3>
        <h4>Rs{price / 100}</h4>
        <div className="menu-item-rating-container">
            <span className="fa fa-star checked"></span>
            <h4 className="rating">{rating}</h4>
        </div>
        <h3 className="desc">{description}</h3>
      </div>
      <div className="item-image-conatiner">
        <img
          className="img"
          src={restMenuItemImage+imageId}
        ></img>
      </div>
    </div>
  );
};

export default MenuCard;
