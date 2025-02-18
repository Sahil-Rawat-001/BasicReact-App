import React, {useState, useEffect, use} from 'react'


function WindowSize(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // This works with no dependencies
    useEffect(() => {

        window.addEventListener("resize", handleResize);
        console.log("Event Listner Added");

        return () => {

            window.removeEventListener("resize",handleResize);
            console.log("Event Listner removed");
        }
    },[]);


    useEffect(() => {

        document.title = `size: ${width} x ${height}`;
    },[width,height]);




    // useEffect(() => {

    //     window.addEventListener("resize", handleResize);
    //     console.log("Event Listner Added");
    // },[width,height])



    function handleResize(){

        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        
      <>
        <p>Window Width: {width} px</p>
        <p>Window height: {height} px</p>
      </>
    );
}

export default WindowSize