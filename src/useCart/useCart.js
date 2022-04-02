import { useEffect, useState } from "react"
import { getshopping } from "../utilities/fakedb"

const useCart=(Products)=>{
    
    const [Cart,setCarts]=useState([])
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
   setCarts(saveCart)
        }
    },[Products])
    return  [Cart,setCarts];
}
export default  useCart;