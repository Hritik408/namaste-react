import { useEffect, useState } from "react";

const User = (props) => {
  const{name, locality} = props;
  const[count] = useState(0);
  const[count2] = useState(0);

  useEffect(()=>{
      console.log("useState");
      
  const timer = setInterval(() => {
    console.log("react mahan hai");
  }, 1000);

       return () => {    // return is use as componentWillUnmount & when u go to another page then it stops the fun of previous page and again when u come to same page then it restart as it is
        clearInterval(timer);
       console.log("stop useState");
       }
  },[]);

   console.log("renders")
  
    return (
        <div className="user-card">
           <h1>Name : {name}</h1>
           <h2>Locality : {locality}</h2>
           <h3>Count : {count}</h3>
           <h3>Count2 : {count2}</h3>

        </div>
    )
}

export default User;