import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9235002&lng=77.6198998&restaurantId=${id}`
    );
    const json = await data.json();
    setRestaurant(json.data);
    console.log(json.data);
    console.log(id);
    console.log(
      json?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        .card?.card?.itemCards
    );
  }

  return restaurant;
};

export default useRestaurant;
