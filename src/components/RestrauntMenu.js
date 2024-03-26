import { useContext, useEffect, useState } from "react";
import { SWIGGY_API_MENU_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestrauntCategory from "./RestrauntCategory";
import { UserContext } from "../utils/UserContext";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const { loggedInUser } = useContext(UserContext);

  const MenuItem = useRestaurantMenu(resId);

  if (!MenuItem) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    MenuItem?.cards[0]?.card?.card?.info;

  const categories =
    MenuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}{" "}
      </p>
      <h3>Menu</h3>
      <div>{loggedInUser}</div>

      {categories.map(({ card }, index) => {
        //controlled component
        return (
          <RestrauntCategory
            title={card.card.title}
            itemCards={card.card.itemCards}
            key={card.card.id}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestrauntMenu;
