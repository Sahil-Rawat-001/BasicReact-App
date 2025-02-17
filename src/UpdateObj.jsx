import React, {useState} from "react";


function UpdateObj(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event){

        // This will update the year but our make and model properties disappear
        // setCar({year: 2025});

        // we use spread operator 
        // this will look like this 
        // setCar({year:2024, make: "Ford", model: "Mustang", year: 2025});
        // If we have two properties with same name we will end up using the last one that is year: 2025
        // because js does not allows duplicate  keys
        // better way is to use a updater function
        // this allow us to safe updates

        setCar( prevCar => ({...prevCar,year: event.target.value}));
    }

    function handleMakeChange(event){

        // better way is to use a updater function
        setCar(prevCar => ({...prevCar, make: event.target.value}));
    }

    function handleModelChange(event){

        setCar(prevCar => ({...prevCar, model: event.target.value}));
    }

    return(
        
        <div>
            <p>Your favorite car is : {car.year}  {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/> <br />
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
            <input type="text" value={car.model} onChange={handleModelChange}/> <br />
        </div>
    );
}

export default UpdateObj