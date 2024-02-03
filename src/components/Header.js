import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";

const Header = ()=>{
   const[btnName, setbtnName] = useState("login")

    const inout = () => {
      btnName === "login" ? setbtnName("logout") : setbtnName("login");
    }

   const onlineStatus = useOnlineStatus();

  //   const data = useContext(UserContext);
  //  console.log(data);

  const{loggedInUser} = useContext(UserContext);
  console.log({loggedInUser});

    return (
      <div className="flex  justify-between bg-pink-50 shadow-lg m-2 sm:bg-slate-500 lg:bg-orange-100">
        <div className="logo_cont">
          <img className="w-36 h-32" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className=" px-4">onlineStatus : {onlineStatus ? "✅" : "🔴" }</li>
            <li className=" px-4"><Link to="/">Home</Link></li>   {/** not use a tag because it refresh the whole page */}
            <li className=" px-4"><Link to="/contact">Contact</Link></li>  
            <li className=" px-4"><Link to="/about">About</Link></li>
            <li className=" px-4"><Link to ="/grocery">Grocery</Link></li>
            <li className=" px-4"><Link to="/cart">Cart</Link></li>  
            
            <button className="login px-4" onClick={inout} >{btnName}</button>

            <li className="text-yellow-500">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  