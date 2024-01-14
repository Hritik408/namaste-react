import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) => {
  //  console.log(items);
  return(
    <div>
    {items.map((item) => (
        <div
         key={item.card.info.id} 
        className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between" >

          <div className="w-9/12">
            <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultprice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description} </p>
            </div>
           
            <div className="w-3/12 p-4"> 
            <div className="absolute" >
             <button className=" bg-gray-800 text-white text-xs rounded-lg my-0 shadow-lg p-1   ">
                Add+</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId } className="w-96 h-20 rounded-lg"></img>
            </div>

        </div>
    ))}
    </div>
  )
}  
export default ItemList;