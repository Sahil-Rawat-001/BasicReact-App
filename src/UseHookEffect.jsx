/*
useEffect() = React hook that tells React DO SOME CODE WHEN:
              This component re-renders
              This component mounts
              The state of a value changes




useEffect(function, [dependencies])

1. useEffect(() => {}) // runs after every re-renders
1. useEffect(() => {}, []) // runs on  mount
1. useEffect(() => {}, [value]) // runs on mount + when value changes


USES

1. Event Listners
2. DOM manipulation
3. Subscriptions (real time updates)
4. Fetching data from an API
5. Clean up when a compnent unmounts

*/


import React, {useState, useEffect} from 'react'

function UseHookEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    // This will change count value in title whenever a component re-renders
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })
    

    // This will change count value only once when we mount our component
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // },[])


    // The title also updates with this code the question is why we use useEffect hook
    // document.title = `Count: ${count} ${color}`;

    // This will change count value only once when we mount our component + when the state changes
    // useEffect help to controlled and safe updates 
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    },[count, color])



    function addCount(){

        setCount(prevCount => prevCount + 1);
    }

    function subtractCount(){

        setCount(prevCount => prevCount - 1);
    }

    function changeColor(){

        setColor(prevColor =>  prevColor === "green" ? "red" : "green")
    }

    return(
        <>
         
        <p style={{color: color}} >Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default UseHookEffect