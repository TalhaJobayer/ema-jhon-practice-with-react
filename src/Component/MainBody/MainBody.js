import React, { useEffect, useState } from 'react';
import Carts from '../Cart/Cart';
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
                    key={product.id}></Product>
                     )
                }
            </div>
            <div className="order-summary">
            <Carts Cart={Cart}></Carts>
            </div>
        </div>
    );
};

export default MainBody;