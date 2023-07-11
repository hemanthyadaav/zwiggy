import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURANTS_API } from "../constants";
import filterData from "../utils.js/filterData";
import getOnlyRestaurants from "../utils.js/getOnlyRestaurants";
import useAllRestaurants from "../hooks/useAllRestaurants";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const { allRestaurants, filteredRestaurants } = useAllRestaurants();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> 🔴 Offline! Please check your internet connection...!</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          id="click"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {!filteredRestaurants?.length == 0 ? (
          filteredRestaurants.map((restaurant, key) => {
            return (
              <Link key={key} to={`/restaurant/${restaurant?.data?.data?.id}`}>
                <Card {...restaurant?.data?.data} />
              </Link>
            );
          })
        ) : (
          <h1>No restaurants matching your search!</h1>
        )}
      </div>
    </>
  );
};

export default Body;
