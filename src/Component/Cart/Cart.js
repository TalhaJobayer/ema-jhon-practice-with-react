import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Carts = ({Cart}) => {
    let total=0;
    Cart.forEach(Price => {
       total=total+Price.price;
     
        
    }); 
    const charge=Cart.length*10;
    const tax=Math.ceil(total*.20)
    const grandTotal=total+charge+tax
     
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
        <button></button>
        </div>
    );
};

export default Carts;