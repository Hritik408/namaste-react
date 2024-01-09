import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    const{ResData} = props;
  const{
    cloudinaryImageId,
    avgRatingString,
    costForTwo,
    cuisines,
    locality,
    name
  } = ResData.info;
  return(
    <div className="res-card">
      <img alt="res-logo" className="logo-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4> AvgRating : {avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>locality : {locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      </div>
  )
}
export default RestaurantCard;