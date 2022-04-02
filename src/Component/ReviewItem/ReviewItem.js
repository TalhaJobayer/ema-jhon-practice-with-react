import React from 'react';
import './ReviewItem.css'
import {BsFillTrashFill} from 'react-icons/bs'

const ReviewItem = (props) => {
    const{ handleRemove,selectedProduct}= props
    const {id,name,category,seller, price,stock, ratings,Count,img,shipping
        ,quantity}=selectedProduct
    return (
        <div className='product-container'>
            <div className='image'>
                <img  src={img} alt="" />
            </div>
            <div className="textPart">
                <h4>{name}</h4>
                <h4>Price:${price}</h4>
                <h4>Shipping Charge:${shipping}</h4>
                <h4>Quantity:{quantity}</h4>
            </div>
            <button onClick={()=>handleRemove(selectedProduct)} className='delete-Btn'><BsFillTrashFill></BsFillTrashFill></button>

        </div>
    );
};

export default ReviewItem;