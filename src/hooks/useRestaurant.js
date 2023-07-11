import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${RESTAURANT_MENU}${id}`);
    const json = await data.json();
    setRestaurant(json.data);
    console.log(json.data);
    console.log(id);
    console.log(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        .card?.card?.itemCards
    );
  }

  return restaurant;
};

export default useRestaurant;
