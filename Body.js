import React, { useState, useEffect } from "react";
import RestrauntCard from "./src/components/RestrauntCard";
import { Shimmer } from "./src/components/Shimmer";
import { SWIGGY_API_URL } from "./src/utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./src/utils/useOnlineStatus";

const Body = () => {
  const [listofRestarunts, setListOfRestarunts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestraunts, setFilteredRestarunts] = useState([]);

  useEffect(() => {
    console.log("useEffectcalled");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    console.log("js", json);
    setListOfRestarunts(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestarunts(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleInputChange = (e) => {
    return setSearchTerm(e.target.value);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );
  }

  return listofRestarunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Enter  a term"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            onClick={() => {
              //filter the restraunt cards and update the UI
              if (searchTerm == "") {
                setFilteredRestarunts(listofRestarunts);
                return;
              }
              const filterBySearchTerm = listofRestarunts.filter(
                (restraunt) => {
                  return restraunt.info.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                }
              );
              setFilteredRestarunts(filterBySearchTerm);
            }}
          >
            Search
          </button>
        </div>
        <div
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filteredList = listofRestarunts.filter(
              (restraunt) => restraunt.data.avgRating > 4
            );
            setListOfRestarunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </div>
      </div>

      <div className="res-container">
        {filteredRestraunts.map((restraunt) => (
          <Link to={`/restraunt/${restraunt.info.id}`} key={restraunt.info.id}>
            <RestrauntCard resData={restraunt.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
