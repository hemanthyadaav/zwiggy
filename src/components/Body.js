import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURANTS_API } from "../constants";
import filterData from "../utils/filterData";
import getOnlyRestaurants from "../utils/getOnlyRestaurants";
import useAllRestaurants from "../hooks/useAllRestaurants";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const allRestaurants = useAllRestaurants();

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

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
      <div className="flex my-4 justify-end px-6 mr-14 pt-20">
        <input
          type="text"
          className="search-input p-2 mx-2 border-2 rounded-md border-indigo-300"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn bg-indigo-600 text-white px-6 rounded-md"
          id="click"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap px-10 pb-20">
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
