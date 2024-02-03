import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const{ResData} = props;

    const{loggedInUser} = useContext(UserContext);

  const{
    cloudinaryImageId,
    avgRatingString,
    costForTwo,
    cuisines,
    locality,
    name
  } = ResData.info;
  return(
    <div className="m-3 p-3 w-52 bg-zinc-100 rounded-lg hover:bg-zinc-200  ">
      <img alt="res-logo" className=" rounded-lg h-52 w-52" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-pretty">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> AvgRatings : {avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>locality :{locality}</h4>
      <h4 className="font-bold italic">{loggedInUser}</h4>
      </div>
  )
}

    export const withVegLabel = (RestaurantCard) => {      // withVegLabel is higher order component which take restcard comp and make changes init
        return (props) =>{        // here return is component which return jsx
          return (            
            <div>
              <label className=" absolute bg-gray-800 text-white m-2 p-2 rounded-lg">Open</label>
              <RestaurantCard {...props} />
            </div>
          )
        }
       }

export default RestaurantCard;