import React, { useEffect, useState } from 'react';
import Carts from '../Cart/Cart';
import {addToDb,getshopping, removeFromDb} from '../../utilities/fakedb'
import Product from '../Product/Product';
import './MainBody.css'
import { useNavigate } from 'react-router-dom';



const MainBody = () => {
    const navigate = useNavigate();
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
           const addedProduct=Products.find(product=>product.id===id)
           if(addedProduct){
            const quantity=getShopingCart[id]
            addedProduct.quantity=quantity
            saveCart.push(addedProduct)
           }
   setCart(saveCart)
        }
    },[Products])

    const handleCart=(SelectedProduct)=>{
        const exist=Products.find(product=>product.id===SelectedProduct.id)
        let newCart=[];
        if(!exist){
            SelectedProduct.quantity=1;
             newCart=[...Cart,SelectedProduct]
        }
        else{
            const remaing=Products.filter(product=>product.id !==SelectedProduct.id)
            exist.quantity= exist.quantity+1
            newCart=[...remaing, exist]

        }
          
           setCart(newCart)
           addToDb(SelectedProduct.id)
        }
        const clearAll=()=>{
          const newCart=[]
            setCart(newCart)
            removeFromDb(Cart)
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
            <Carts 
            clearAll={clearAll}
            Cart={Cart}
            >
                <button onClick={()=>navigate('/OrderReview')}   className='Review-btn'>Review Order</button>
            </Carts>
            </div>
        </div>
    );
};

export default MainBody;