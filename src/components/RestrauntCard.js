import React from "react";
import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    sla,
    costForTwo,
  } = resData;

  const style = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img src={`${CDN_URL}/${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestrauntCard;
