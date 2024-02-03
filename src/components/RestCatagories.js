import ItemList from "./ItemList";

const RestCatagories = ({data, showItems, setshowIndex, jaat}) => {   // restCatagories is control by restMenu & if this has own state then it is uncontrol
    //  console.log(data);
 //  const handleClick = () => setshowIndex(jaat);
   const handleClick = () => setshowIndex();

    return (
        <div>
            <div className="p-3 bg-gray-200 shadow-lg mx-auto my-3 w-6/12 ">

                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold italic text-lg">{data.title} ({data.itemCards.length}) </span>
                 <span className="justify-end">{"⬇️"}</span> 
                </div>

             {showItems && <ItemList items = {data.itemCards} />}
            </div>
    
        </div>
    )
}

export default RestCatagories;