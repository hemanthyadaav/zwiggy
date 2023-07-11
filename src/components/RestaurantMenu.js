import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
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
          <h3 style={{ marginLeft: "30px" }}>Recommended</h3>
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
