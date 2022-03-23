import React from 'react';
import './Cart.css'

const Carts = ({Cart}) => {
    return (
        <div>
             <h1>Order Summery</h1>
        <div className='text-part2'>
           
            <h3>Selected Items:{Cart.length}</h3>
             <h3>Total Price:</h3>
             <h3>Shipping charge:</h3>
             <h3>Tax:</h3>
             <h1>Grand Total:</h1>
        </div>
        </div>
    );
};

export default Carts;