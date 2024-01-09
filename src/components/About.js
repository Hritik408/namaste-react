import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"

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

