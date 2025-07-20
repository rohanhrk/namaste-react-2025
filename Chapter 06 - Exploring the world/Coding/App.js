import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { logo, restImage } from "./Utils/constant";

/*
  Header
    * Logo
    * Nav Items
      ** Home
      ** About
      ** Help
      ** Carts
      ** Sign in
  Body
    * Resturant Card
      ** Restaurant Image
      ** Dishes Name
      ** Rating
      ** Delivery Est. Time
      ** Price
  Footer
    * Copy Right
    * Links
    * Contact
    * Address
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header logo={logo} />
      <Body restImage={restImage} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
