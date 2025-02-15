/*
React hook  = Special Function that allows functional components 
              to use React features without writing class components 
              (useState, useEffect, useContext, useReducer, useCallback, and more...)
*/


/*
useState() = A React hook that allows the creation of a stateful variable and a setter function
            to update its value in the virtual DOM.
            [name, setName];
*/

import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState('guest');
    const [age, setAge] = useState(0);
    const [isEligibleVoter, setIsEligibleVoter] = useState(false);

    const updateName = () => {

        setName("SpongeBob")
    }

    const incrementAge = () =>{

        setAge( prevAge => {

            const newAge = prevAge + 1;
            if(newAge >= 18) setIsEligibleVoter(true);
            return newAge;
        });
    }

    const decrementAge = () =>{

        setAge(prevAge => {

            const newAge = prevAge - 1;

            if(newAge < 18) setIsEligibleVoter(false);

            return newAge
        })
        
    }

    return (

        <div>
            <p>Name: {name}</p>
             <button onClick={updateName}>Set Name</button>
           
            <p>Age: {age}</p>        
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>

            <p>Eligible for voting: {isEligibleVoter ? "Yes" : "No"}</p>        
            
            
        </div>
    );
}

export default MyComponent