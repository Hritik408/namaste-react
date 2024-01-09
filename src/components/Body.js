import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";

const Body = ()=>{
    const[listofRestaurants, setListOfRestaurant] = useState([]); 
    const[filterRestaurants, setfilterRestaurants] = useState([]);  
      
    const[searchText, setsearchText] = useState("");

   useEffect(()=>{fetchData()}, []);

const fetchData = async () =>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );
  const jsons = await data.json();
  console.log(jsons);
   setListOfRestaurant(jsons?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilterRestaurants(jsons?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}    

   if(listofRestaurants===0) {
    <Shimmer />
   }

   const text = (event) => {
    setsearchText(event.target.value);
}

   const searchName = () => {
    const filterRestro = listofRestaurants.filter((res) =>(
       res.info.name.toLowerCase().includes(searchText.toLowerCase())
     ) )
       setfilterRestaurants(filterRestro);
    }

   const avgRating = ()=> {
      const filterdList = listofRestaurants.filter((res)=>(
        res.info.avgRatingString > 4.1
      )) 
       setfilterRestaurants(filterdList);
   }

   const onlineStaus = useOnlineStatus();
   if(onlineStaus === false) 
   return (<h1>Looks like you are offline !! Please check the internet</h1>);

      return  (listofRestaurants.length===0) ? (<Shimmer />) :  (
      <div className="body">
      <div className="filter">

        <div className="search">
          <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={text}> 
          </input>
          <button className="search-btn" onClick = {searchName} > Click me </button>
        </div>

        <button className="filter-btn" onClick = {avgRating}> Top Rated Restaurant </button>
      </div>

    <div className="res-container">
      {filterRestaurants.map((rest) => (
        <Link
         key={rest.info.id} to={"/restaurant/" + rest.info.id}>
        {<RestaurantCard ResData = {rest} />}
        </Link>
      ))
      } 
    </div>
    
      </div>
    )
  }
  export default Body 




