const getOnlyRestaurants = (restaurants) => {
  return restaurants.filter(
    (restaurant) => restaurant.cardType === "restaurant"
  );
};

export default getOnlyRestaurants;
