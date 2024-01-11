import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

const RestrauntCard = (props) => {
  //console.log("props1", props);

  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  console.log("user", loggedInUser);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    sla,
    costForTwo,
  } = resData;

  return (
    <div className="p-4 m-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={`${CDN_URL}/${cloudinaryImageId}`} />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

//HigherORderComponent
//input-> RestrauntCard
//output->PromotedRestrauntCard

export const WithPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg ">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
