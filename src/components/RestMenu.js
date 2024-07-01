import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCatagories from "./RestCatagories";
import { useState } from "react";


const RestMenu = () => {

     const {restId} = useParams();   // here restId is comes from app.js path/element 

    const resdata = useRestaurantMenu(restId);

 //   const[showIndex, setshowIndex] = useState(false);
 //  const[showIndex, setshowIndex] = useState(true);
   const[showIndex, setshowIndex] = useState(true);
  

    if(resdata === null)  return <Shimmer />
    
     const {name, cuisines, costForTwoMessage} = resdata?.cards[2]?.card?.card?.info;

  //   const {itemCards} = resdata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   //  console.log(itemCards);
     
       const Catagories = resdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"   // if @ comes then use [""]
       ));
   //    console.log(Catagories);

   return  (
        <div className="text-center my-5">
        <h1 className="font-bold text-2xl ">{name}</h1>
        <p className="font-bold  my-2 italic">{cuisines.join(", ")} - {costForTwoMessage} </p>
        {/* catogories accordians */}
        {Catagories.map((catagory, index)=>(
          // controlled component
          <RestCatagories 
          key={catagory?.card?.card?.title} 
          data = {catagory?.card?.card}
          jaat = {index} 
          showItems = {index === showIndex ? true : false} 
        //  showItems={showIndex === index}
        //  setshowIndex={(value) => setshowIndex(value === index ? null : value)}
        setshowIndex = {(value) => setshowIndex(showIndex === value ? index : value)}
       //     setshowIndex = {() => setshowIndex(index)}   // this is for only one open and other will be closed
        
         />
        ))}

        </div>
     )
}

export default RestMenu;

























 {/* <ul>
       {itemCards.map((item)=>(
        <li key={item.card.info.id}> {item.card.info.name} </li>
       ))}
        </ul> */}