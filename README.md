# Namaste React 

The Provider component is used to wrap a part of the React tree where you want to make the context available. It takes a value prop, which is the value that will be shared.
The Consumer component is used to access the context value within a component. It uses a render prop pattern.

// Example of using context
const MyContext = React.createContext();

const MyComponent = () => (
  <MyContext.Provider value={/* some value */}>
    <MyContext.Consumer>
      {value => /* render something based on the context value */}
    </MyContext.Consumer>
  </MyContext.Provider>
);


useContext Hook (introduced in React 16.8):

The useContext hook is a more concise way to consume the context value within a functional component.
jsx
Copy code
// Example using useContext hook
const MyContext = React.createContext();

const MyComponent = () => {
  const value = React.useContext(MyContext);
  // render something based on the context value
};


React.createContext:

This function creates a new context object. It takes an optional argument, which is a default value that will be used when a component does not find a matching provider above it in the tree.
jsx
Copy code
const MyContext = React.createContext(defaultValue);

# 2 types Routing in web apps
 - client side routing
 - server side routing

 # Redux toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - connect our store to our app
 - slice (cartSlice)
 - dispatch(action)
 - Selector