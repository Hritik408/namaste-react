// const heading = React.createElement("h1",{id:"heading"},"Hello world I'm from react")
  // const root = ReactDOM.createRoot(document.getElementById("root"))   // root is the place where all the react code run 
// root.render(heading);

/* <div id="parent">
<div id="child">
    <h1>Hello there i'm here</h1>
</div>
</div> */

const parent = React.createElement("div",{id : "parent"},[
        React.createElement("div", {id : "child"},[
        React.createElement("h1",{},"i'm in h1 tag"),
        React.createElement("h2",{},"i'm in h2 tag"),
  ]),
    React.createElement("div",{id: "child2"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
  ]),
]);

     console.log(parent);  // object
    const root = ReactDOM.createRoot(document.getElementById("roots "));
    root.render(parent);  // it is just put the parent under div tab which is in html has id is same as root
          