import { useEffect, useState } from "react";
import { SWIGGY_API_MENU_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const MenuItem = useRestaurantMenu(resId);

  if (!MenuItem) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId } =
    MenuItem?.cards[0]?.card?.card?.info;

  const { itemCards } =
    MenuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines}</h3>

      {MenuItem?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
        (item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        )
      )}
    </div>
  );
};

export default RestrauntMenu;
