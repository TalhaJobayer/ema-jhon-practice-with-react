import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


import './MainBody.css'


const MainBody = () => {
    const [Products,setProducts]=useState([])
    const [Cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleCart=(product)=>{
           const newCart=[...Cart,product]
           setCart(newCart)
        }
    return (
        
        <div className='main-container'>
            
            <div className="product-part">
                {
                   Products.map(product=><Product
                    product={product}
                    handleCart={handleCart}
                    key={product.id}></Product> )
                }
            </div>
            <div className="order-summary">
                <h2>Order Summury</h2>
                <h3>Selected Items:{Cart.length}</h3>
                <h3>Total Price:</h3>
                <h3>Shipping Charge:</h3>
                <h3>Tax:</h3>
                <h3>Grand Total:</h3>
            </div>
        </div>
    );
};

export default MainBody;