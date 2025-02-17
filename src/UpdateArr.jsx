import React, {useState} from "react";


function UpdateArr(){

    const [food, setFood] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(event){

      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value = "";

      if(newFood === "") return;

      setFood(prevFood => [...prevFood,newFood]);
    }

    function handleKeyPress(event){

        if(event.key === "Enter"){
            handleAddFood();
        }
    }

    function handleRemoveFood(index){

        //  The underscore represents that element is passed but ignored
        setFood( food.filter((_,i) => i !== index) );
    }

    return(

        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index) => (

                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" onKeyDown={handleKeyPress} />
            <button onClick={handleAddFood} >Add Food</button>
        </div>
    );
}

export default UpdateArr