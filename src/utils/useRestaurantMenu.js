import { useEffect, useState } from "react";
import { SWIGGY_API_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menuItem, setMenuItem] = useState(null);
  //fetchData

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${SWIGGY_API_MENU_URL}&restaurantId=${resId}`);
    const json = await data.json();
    console.log(json?.data);
    setMenuItem(json?.data);
  };

  return menuItem;
};
export default useRestaurantMenu;
