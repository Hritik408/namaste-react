import RestaurantCard from "../RestaurantCard"
import resList  from "../utils/mockData"
import { useState } from "react"
import resList from "../utils/mockData"

const Body = ()=>{
 //    const arr = useState(list)
 //    const[listofRestaurants, setListOfRestaurant] = arr; 
    const[listofRestaurants, setListOfRestaurant] = useState(resList); // line 7 & 8 = 9
      
//  let listofRestaurants = [
//     {
//         "info": {
//           "id": "65797",
//           "name": "Leon's - Burgers & Wings (Leon Grill)",
//           "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "American",
//             "Snacks",
//             "Turkish",
//             "Portuguese",
//             "Continental"
//           ],
//           "avgRatingString": "4.4",
//         }}, 
//         {
//             "info": {
//               "id": "65798",
//               "name": "KFC",
//               "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
//               "costForTwo": "₹300 for two",
//               "cuisines": [
//                 "American",
//                 "Snacks",
//                 "Turkish",
//                 "Portuguese",
//                 "Continental"
//               ],
//               "avgRatingString": "4.7",
//             }}

//  ]
   
    return (
      <div className="body ">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filterdList = listofRestaurants.filter(
                (hri) => hri.info.avgRatingString > 4.3  // display the card whose rating is more than 4
            )
            setListOfRestaurant(filterdList);
        }}>Top Rated Restaurant</button>
      </div>

      <div className="res-container">
         {listofRestaurants.map((restaurant)=>(   // it is the loop
          <RestaurantCard key={restaurant.info.id} resData = {restaurant} /> 
         ))}  
      </div> 
      </div>
    )
  }
  export default Body

   {/* <RestaurantCard resData = {resList[1]} /> <RestaurantCard resData = {resList[15]} />*/}