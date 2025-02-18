/*
useContext() = React Hook that allows you to share values betwenn multiple
               levels of components without passing props through each level
*/
import ComponentD from "./ComponentD";
import React, {useContext} from 'react'
import { UserContext } from './ComponentA';

function ComponentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello, ${user} again `}</h2>
             
            <ComponentD/>
        </div>
    );
}

export default ComponentC