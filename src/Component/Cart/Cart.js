import React from 'react';

import './Cart.css'

const Carts = ({Cart}) => {
    let total=0;
    let charge=0;
    let quantity=0;
    Cart.forEach(product => {
        quantity=quantity+product.quantity
       total=total+product.price*product.quantity;
       charge=charge+product.shipping*product.quantity;
        
    }); 
    
    const tax=Math.round(total*.10).toFixed(2)
    const grandTotal=total+charge+parseFloat (tax)
     
    return (
        <div className='full-container'>
             <h1>YOUR CART</h1>
        <div className='text-part2'>
           
            <h3>Selected Items:{quantity}</h3>
             <h3>Total Price:$ {total}</h3>
             <h3>Shipping charge:$ {charge}</h3>
             <h3>Tax:$ {tax}</h3>
             <h1>Grand Total:$ {grandTotal}</h1>
        </div>
        <button  className='clear-btn'>Clear All</button>
        
        </div>
    );
};

export default Carts;