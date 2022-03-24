import React from 'react';

import './Cart.css'

const Carts = ({Cart}) => {
    let total=0;
    let charge=0;
    Cart.forEach(Price => {
       total=total+Price.price;
       charge=charge+Price.shipping
        
    }); 
    
    const tax=Math.round(total*.10).toFixed(2)
    const grandTotal=total+charge+parseFloat (tax)
     
    return (
        <div className='full-container'>
             <h1>Order Summery</h1>
        <div className='text-part2'>
           
            <h3>Selected Items:{Cart.length}</h3>
             <h3>Total Price:$ {total}</h3>
             <h3>Shipping charge:$ {charge}</h3>
             <h3>Tax:$ {tax}</h3>
             <h1>Grand Total:$ {grandTotal}</h1>
        </div>
        
        </div>
    );
};

export default Carts;