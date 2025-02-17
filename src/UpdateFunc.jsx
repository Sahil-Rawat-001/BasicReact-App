/*
Updater function = A function passed as an argument to setState() usually
                   ex. setYear(year + 1);
                   setYear(updater function)
                   used with multiple state updates and asynchronus functions
                   good practice to use updater function
*/

import react, {useState} from 'react'

function UpdateFunc(){

    const [count, setCount] = useState(0);

    const incrementCount = () => {

        // This will not increase count beacuse
        // It uses the current state to calculte the next state
        // set functions do not trigger an update
        // react batches together state updates for performance reasons
        // NEXT state becomes the CURRENT state after an update
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        //instead we can do that
        // Takes the PENDING state to calculate NEXT state
        // React puts your updater function in a queue 
        // During the next render, it will call them in the same order
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return(

        <div className='counter-container'>

            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrementCount}>Decrement</button>
            <button className="counter-button" onClick={resetCount}>Reset</button>
            <button className="counter-button" onClick={incrementCount}>Increment</button>
        </div>
    );

}

export default UpdateFunc

