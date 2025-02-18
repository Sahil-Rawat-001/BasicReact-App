/*
useContext() = React Hook that allows you to share values betwenn multiple
               levels of components without passing props through each level
*/

import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext()

// provider component
function ComponentA(){

    const [user, setUser] = useState("SahilRawat");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value = {user}>

            <ComponentB user = {user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA