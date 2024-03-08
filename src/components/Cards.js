import React from "react";
import {CDN_URL} from "../utils/constants"
const Cards = ({cardItem}) => {
  return (
    <div className="card-container">
      <div className="res-image-container">
        <img
          className="res-image"
          src={CDN_URL+
            cardItem?.info?.cloudinaryImageId
            }
          alt="res-img"
        />
      </div>
      <div className="carddetails-container">
        <div className="res-name">{cardItem?.info?.name}</div>
        <div className="rating">
            <div>{cardItem?.info?.avgRating}</div>
            <div>{cardItem?.info?.sla?.slaString}</div>
        </div>
        <div>{cardItem?.info?.cuisines.join(" , ")}</div>
        <div>{cardItem?.info?.costForTwo}</div>
      </div>
    </div>
  );
};

export default Cards;
