import React from "react"
// import { json } from "react-router-dom";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0 ,
            userInfo : {
            // name : "jaat",
            // location : "meerut" // if we nothing put inside userInfo then there is no change in final input
            }
        } 
     //  console.log("construct is called")
    }


     async componentDidMount(){
     //   console.log(this.props.name + " component did mount")
     console.log("compDidMount is called")
       const data = await fetch("https://api.github.com/users/Hritik408");
       const json = await data.json();
    //   console.log(json);

       this.setState({
        userInfo : json
    })

    // this.timer =   setInterval(()=>{
    //     console.log("react mahan hai")
    // },1000)
      }


      componentDidUpdate(){
    //    console.log("componentdDidUpdate is called");
      }

      

      componentWillUnmount(){
        clearInterval(this.timer)   // it is imp bcz whn u go to another page then it stops & when u come again then it start 
    //    console.log("componentWillUnmount is called");
      }

    
    render() {
        const{count} = this.state;

        const{name, login, avatar_url, id} = this.state.userInfo;
    //    debugger;

    console.log("render is called")
    const couInc = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

        return (
            <div className="user-card">
                <h1>Name : {name}</h1>
                {/* <h2>Locality : {locality}</h2> */}
                <h2>Locality : {login}</h2>
                <h2>Id : {id}</h2>
               <div className="countBtn">
               <h3>Count : {count}</h3>
                <button onClick={couInc} className="cou-btn">countInc</button>
               </div>
                <img className="w-44 h-44" src={avatar_url} />
            </div>
        )
    }
}

export default UserClass;
