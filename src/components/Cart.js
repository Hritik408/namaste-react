import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
   const cardItems = useSelector((store) => store.cart.items);
   const dispatch = useDispatch();
   const handleclearCart = () => {
     dispatch(clearCart());
   }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold" >Cart</h1>
            <div className="w-6/12 m-auto" >
            <button className="bg-black text-white rounded-md p-2 m-2"
            onClick={handleclearCart}> clearCart </button >
            {cardItems.length === 0 && <h1>"Please add some items"</h1>} 
            <ItemList items = {cardItems}/>
            </div>
        
        </div>
    )
}

export default Cart;