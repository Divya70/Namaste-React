import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL, MENU_LAST_URL } from "../utils/constants";
const RestaurentMenu = () => {
  const {resId} = useParams();
  console.log("resid",resId)
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const menuData = await fetch(MENU_API_URL+resId);
    const jsonData = await menuData.json();
    console.log("menu", jsonData?.data);
    setResInfo(jsonData?.data);
  };
  if (resInfo === null) return <div>Loading...</div>;
   console.log(resInfo)
   const {name, cuisines
   } =resInfo?.cards[0]?.card?.card?.info
  return (
    <div>
<h2>{name}</h2>
<h3>{cuisines.join(",")}</h3>
    </div>
  )
 
};

export default RestaurentMenu;
