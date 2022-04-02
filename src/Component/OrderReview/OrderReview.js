import React from 'react';
import useCart from '../../useCart/useCart';
import Carts from '../Cart/Cart';
import useProducts from '../../useProducts/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'
import { removeFromDb } from '../../utilities/fakedb';


const OrderReview = () => {
    const [Products,setProducts]=useProducts()
    const [Cart,setCarts]=useCart(Products)
    const handleRemove=(product)=>{
       const rest=Cart.filter(selectedProduct=>selectedProduct.id !==product.id)
       setCarts(rest) 
       removeFromDb(product.id)

    }
    return (
     
            <div className='shop-container'>
                <div className="ProductCart">
                {
                   Cart.map(selectedProduct=><ReviewItem
                    selectedProduct={selectedProduct}
                    key={selectedProduct.id}
                    handleRemove={ handleRemove}
                   ></ReviewItem>)
                }
                </div>
                <div className="order-summary">
                <Carts Cart={Cart}
            ></Carts>
                </div>
            </div>
      
    );
};

export default OrderReview;