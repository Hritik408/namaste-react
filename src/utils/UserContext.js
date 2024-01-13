import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "default name",
    id : "123"
}) 

export default UserContext;