import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStaus";

const Header = ()=>{
   const[btnName, setbtnName] = useState("login")

    const inout = () => {
      btnName === "login" ? setbtnName("logout") : setbtnName("login");
    }

   const onlineStatus = useOnlineStatus();

    return (
      <div className="flex  justify-between bg-pink-50">
        <div className="logo_cont">
          <img className="w-56" src={LOGO_URL}/>
        </div>
        <div className="nav_items">
          <ul className="flex p-4 m-4">
            <li>onlineStatus : {onlineStatus ? "✅" : "🔴" }</li>
            <li><Link to="/">Home</Link></li>   {/** not use a tag because it refresh the whole page */}
            <li><Link to="/contact">Contact</Link></li>  
            <li><Link to="/about">About</Link></li>
            <li><Link to ="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart</Link></li>  
            
            <button className="login" onClick={inout} >{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  