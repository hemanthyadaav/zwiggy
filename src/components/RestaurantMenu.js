import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.927043825471223&lng=77.62274231761694&restaurantId=${id}`
    );
    const json = await data.json();
    setRestaurant(json.data);
    console.log(
      json.data.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card
        ?.card?.itemCards
    );
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const info = restaurant?.cards?.[0]?.card?.card?.info;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-info">
        <div>
          <img src={IMAGE_URL + info?.cloudinaryImageId}></img>
          <h1>{info?.name}</h1>
          <h3>{info?.cuisines?.join(", ")}</h3>
          <h3>{info?.areaName + ", " + info?.locality + ", " + info?.city}</h3>
          <h3>{info?.costForTwoMessage}</h3>
          <h3>{info?.avgRating} Stars</h3>
          <h3>{info?.totalRatingsString}</h3>
        </div>
        <div className="recommended-menu">
          <h3 style={{marginLeft: "30px"}}>Recommended</h3>
          <ul>
            {restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card?.card?.itemCards?.map(
              (item, index) => {
                return <li key={index}>{item?.card?.info?.name}</li>;
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
