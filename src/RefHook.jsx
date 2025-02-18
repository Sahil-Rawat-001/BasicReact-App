/*

useRef() = "use Reference" Does not cause re-renders when its value changes.
            When you want a component to "remember" some information,
            but you don't want that information to trigger new renders

            1. Accessing/Interacting with DOM elements
            2. Handling Focus, Animations and Transitions
            3. Managing Timers and Intervals
*/

import { useState, useEffect, useRef } from "react";


function RefHook(){

    // let [number, setNumber] = useState(0);

    // useRef returns an object with one property only that is current 
    // ref = {current: 0}
    // const ref = useRef(0);
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {

        console.log("Component rendered");
    });

    function handleClickOne(){
        // setNumber(prevNumber => prevNumber + 1);
        // ref.current = ref.current + 1;
        // console.log(ref.current);

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="red";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClickTwo(){

        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="blue";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClickThree(){
        

        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="orange";
    }



    return(

        <div>
            <button onClick={handleClickOne}>
                    Click Me 1
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClickTwo}>
                    Click Me 2
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClickThree}>
                    Click Me 3
            </button>
            <input ref={inputRef3} />
        </div>
    );
}

export default RefHook