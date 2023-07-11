import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_API } from "../constants";
import getOnlyRestaurants from "../utils/getOnlyRestaurants";

const useAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(ALL_RESTAURANTS_API);
    const json = await data.json();
    const onlyRestaurants = getOnlyRestaurants(json?.data?.cards);
    setAllRestaurants(onlyRestaurants);
    console.log(onlyRestaurants);
  }
  return allRestaurants;
};

export default useAllRestaurants;
