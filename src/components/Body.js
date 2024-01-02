import RestaurantCard from "../RestaurantCard"
import resList  from "../utils/mockData"
import { useState, useEffect } from "react"

const Body = ()=>{
 //    const arr = useState(list)
 //    const[listofRestaurants, setListOfRestaurant] = arr; 
 //   const[listofRestaurants, setListOfRestaurant] = useState(resList); // line 7 & 8 = 9
    const[listofRestaurants, setListOfRestaurant] = useState([]); // if u not want data from mock then use it as
      
useEffect(()=>{
  fetchData();
},[]);

const fetchData = async () =>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const jsons = await data.json();

  console.log(jsons);
   setListOfRestaurant(jsons.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}
   
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
          <RestaurantCard key={restaurant.info.id} ResData = {restaurant} /> 
         ))}  
      </div> 
      </div>
    )
  }
  export default Body

   {/* <RestaurantCard resData = {resList[1]} /> <RestaurantCard resData = {resList[15]} />*/}