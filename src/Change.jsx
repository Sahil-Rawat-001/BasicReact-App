/*
onChange = event handler used primarily with form elements 
           ex. <input>, <textarea>, <select>, <radio> 
           Triggers a function every time the value of the input changes

*/

import React, {useState} from "react";

function Change(){

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("");

    function handleNameChange(e){

        setName(e.target.value);
    }
   
    function handleQuantityChange(e){

        setQuantity(e.target.value);
    }
    
    function handleCommentChange(e){

        setComment(e.target.value);
    }
   
    function handlePaymentChange(e){

        setPayment(e.target.value);
    }
    
    function handleDeliveryChange(e){

        setDelivery(e.target.value);
    }

   
    return(

        <>
           <div>
              <input type="text" value={name} onChange={handleNameChange}/>          
              <p>name: {name}</p>
              
              <input type="number" value={quantity} onChange={handleQuantityChange}/>          
              <p>Quantity: {quantity}</p>

             <textarea value={comment}  placeholder="Enter deliver instructions" onChange={handleCommentChange} ></textarea>         
              <p>Comment: {comment}</p>

              <select value={payment} onChange={handlePaymentChange} >
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
                <option value="UPI">UPI</option>
              </select>
              <p>Payment: {payment}</p>
 
            <label>
                <input type="radio" value="Pick Up" checked={delivery == "Pick Up"} onChange={handleDeliveryChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" checked={delivery == "Delivery"} onChange={handleDeliveryChange}/>
                Delivery
            </label>

            <p>Shipping: {delivery}</p>

           </div>        
        </>
    );
}

export default Change;