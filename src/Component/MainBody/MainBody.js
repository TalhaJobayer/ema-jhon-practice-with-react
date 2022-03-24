import React, { useEffect, useState } from 'react';
import Carts from '../Cart/Cart';
import {addToDb,getshopping} from '../../utilities/fakedb'
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
    useEffect(()=>{
        const getShopingCart=getshopping()
        const saveCart=[]
        for (const id in getShopingCart) {
           const addedProduct=Products.find(product=>product.id==id)
           if(addedProduct){
            const quantity=getShopingCart[id]
            addedProduct.quantity=quantity
            saveCart.push(addedProduct)
           }
   setCart(saveCart)
        }
    },[Products])

    const handleCart=(product)=>{
           const newCart=[...Cart,product]
           setCart(newCart)
           addToDb(product.id)
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