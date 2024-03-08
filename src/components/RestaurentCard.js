import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import WithPromotedLabel from "./WithPromotedLabelCard";
const RestaurentCard = () => {
  const [listData, setListData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
const promotedLabelCard = WithPromotedLabel(Cards)
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await res.json();
    setListData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>Looks like you are offline!! Please check your internet connection.</>
    );
  return listData?.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body-container">
      <div className="search-container">
        <div className="search-wrrap">
          <input
            type="search"
            placeholder="search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searcheRes = listData.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRes(searcheRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredData = listData.filter(
              (res) => res.info.avgRating > 4
            );
            setListData(filteredData);
          }}
        >
          Filter Restaurent
        </button>
      </div>
      <div className="cards-container">
        {filteredRes?.map((item) => {
          return (

            <Link to={"/restaurents/" + item?.info?.id} key={item?.info?.id}>
              <Cards cardItem={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentCard;


