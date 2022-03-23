import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handleCart}=props;
    const {id,name,category,seller, price,stock, ratings,Count,img,shipping
        ,quantity}=props.product
        
        return (
        <div className='product'>
        
           
           <img src={img} alt="" />
            
            <div className="text-part">
            <h4>{name}</h4>
            <h5>Price:{price}</h5>
            <small>Manufacturer:{seller}</small><br />
            <small>ratings:{ratings} star</small>
            </div>
           
          <button onClick={()=>handleCart(props.product)} type="button" className='btn  button1'><b>Add To Cart</b></button>
        
    </div>        
    );
};

export default Product;