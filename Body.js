import React, { useState, useEffect, useContext } from "react";
import RestrauntCard, {
  WithPromotedLabel,
} from "./src/components/RestrauntCard";
import { Shimmer } from "./src/components/Shimmer";
import { SWIGGY_API_URL } from "./src/utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./src/utils/useOnlineStatus";
import { UserContext } from "./src/utils/UserContext";

const Body = () => {
  const [listofRestarunts, setListOfRestarunts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestraunts, setFilteredRestarunts] = useState([]);

  const RestrauntCardPromoted = WithPromotedLabel(RestrauntCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

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

  return listofRestarunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="p-4 mx-4">
          <input
            type="text"
            className="border-black  border-solid border-2 py-4 rounded-2xl"
            placeholder="Enter  a term"
            onChange={(e) => handleInputChange(e)}
          />
          <div className="flex items-center">
            <button
              className="px-4 m-4 bg-slate-100 rounded-lg"
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
        </div>
        <div
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filteredList = listofRestarunts?.filter(
              (restraunt) => restraunt.info.avgRating > 4
            );
            setListOfRestarunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </div>
        <div>
          <label>User Name</label>
          <input
            className="border-2 border-black p-2 border-solid"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunts?.map((restraunt) => (
          <Link to={`/restraunt/${restraunt.info.id}`} key={restraunt.info.id}>
            {restraunt?.info?.promoted ? (
              <RestrauntCardPromoted resData={restraunt.info} />
            ) : (
              <RestrauntCard resData={restraunt.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
