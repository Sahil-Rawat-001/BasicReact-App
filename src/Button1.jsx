function Button1(){


    // Run these functions inside button tag in onClick ={}
    // const handleClick = () => console.log("Oucch");
    // const handleClickTwo = (name) => console.log(`${name}, Stop clicking me`);
    
    // let count = 0;

    // const handleClickThree = (name) => {

    //     if(count < 3){
    //         count++;
    //         console.log(`${name } you clicked me ${count} times`);
    //     } else{
    //         console.log(`${name } stop clicking me`);
    //     }
    // }


    const handleClickFour = (e) => {
        e.target.textContent = "Ouch 🚀";
    }

    return(
        // <button className="btn1" onClick={handleClickFour}>
        //     Click Me 🚀
        // </button>
        <button className="btn1" onDoubleClick={handleClickFour}>
            Click Me 🚀
        </button>
    );
}

export default Button1