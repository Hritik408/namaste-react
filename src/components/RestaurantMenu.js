import { useParams } from "react-router-dom";
 import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
//  import { useParams } from "react-router-dom";  
 // import { useState, useEffect } from "react";

const RestaurantMenu = () => {
    
  const{ resId } = useParams();

//   const[resInfo, setresInfo] = useState(null);

// useEffect(()=>{fetchData()},[]);

// const fetchData = async ()=>{
//   const data = await fetch(MENU_API + resId);
//   const json = await data.json();
//   setresInfo(json.data);
// }

   const resInfo = useRestaurantMenu(resId);
 //  const resInfo = useRestaurantMenu(resId);
  
       if(resInfo===null) return (<Shimmer />);

       const{name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

       const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

       console.log(itemCards);

    return (
     <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h1>Menu</h1>
        <ul>  {itemCards.map((item)=>(
        <li key={item.card.info.id}>  {item.card.info.name} : {"Rs."}{item.card.info.price/100} </li>
        ))
      }
     </ul>
     </div>
    )
}   

export default RestaurantMenu;




















//   const[resInfo, setresInfo] = useState(null);

// useEffect(()=>{fetchData()},[]);

// const fetchData = async ()=>{
//   const data = await fetch(MENU_API + resId);
//   const json = await data.json();
//   setresInfo(json.data);
// }



