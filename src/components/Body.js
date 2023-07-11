import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.927043825471223&lng=77.62274231761694&offset=15"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards);
    setFilteredRestaurants(json?.data?.cards);
    console.log(json?.data?.cards);
  }

  // if (!allRestaurants) return null;

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
            // setAllRestaurants(restaurantList);
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
