import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    const[listofRestaurants, setListOfRestaurant] = useState([]); 
    const[filterRestaurants, setfilterRestaurants] = useState([]);  
      
    const[searchText, setsearchText] = useState("");

    const RestaurantcardVeg = withVegLabel(RestaurantCard);

  //  console.log(listofRestaurants); 

   useEffect(()=>{fetchData()}, []);

const fetchData = async () =>{
  const data = await fetch(
 //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
   if(onlineStaus === false) {
   return (<h1>Looks like you are offline !! Please check the internet</h1>);
   }

       const{loggedInUser, setUserName} = useContext(UserContext);

       
      return  (listofRestaurants.length===0) ? (<Shimmer />) :  (
      <div className="body">
      <div className="filter flex">

        <div className="search">
          <input type="text" className="border border-solid border-black" placeholder="Search" value={searchText} onChange={text}> 
          </input>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick = {searchName} > Click me </button>
        </div>

          <div>
        <button className="px-4 py-2 bg-purple-100 m-4 rounded-lg" onClick = {avgRating}> Top Rated Restaurant </button>
        </div>
        
        <div className="px-4 py-2 bg-red-100 m-3  rounded-lg h-11 cursor-pointer">
          <label className="m-1 p-1 cursor-pointer">UserName:</label>

          <input className="border border-black p-1 h-7 rounded-md"
          placeholder="username"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)} />

        </div>

      </div>

    <div className="flex flex-wrap ">
      {filterRestaurants.map((rest) => (
        <Link
         key={rest.info.id} to={"/rest/" + rest.info.id}>
           { rest.info.isOpen ? (<RestaurantcardVeg ResData = {rest} />) : (<RestaurantCard ResData = {rest} />) } 
        </Link>
      ))
      } 
    </div>
      </div>
    )
  }
  export default Body 




