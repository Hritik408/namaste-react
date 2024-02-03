import { Component, useContext } from "react"
  //  import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

class About extends Component{

    constructor(props){
        super(props)
    
   //     console.log("Parent contructor")
    }

    componentDidMount(){
   //     console.log("Parent comp did mount")
    }

    render(){
    //    console.log("Parent render");
       
        return (
            <div>
                <h1>Hello</h1>
                <h1>This is namaste web Series</h1>
                <div>
                    {/* LoggedUser: */}
                     <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className=" fond-bold text-orange-500">LoggedUser: {loggedInUser}</h1>
                    )}
                     </UserContext.Consumer>
                 
                </div>

             {/* <User name = {"First"} locality = {"jammu"} />    */}
                <UserClass name = {"First"} locality = {"jalalabad"} />
               {/* <UserClass name = {"Second"} locality = {"jalalabad"} /> */}
            

            </div>
        ) 
    }
}
export default About


















































// const About = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <h1>This is namaste web Series</h1>
//             <User name = {"Hritik (function)"} locality = {"jalalabad"} />
//             <UserClass name = {"Hritik (class)"} locality = {"jalalabad"} />
//         </div>
//     )
// } 

