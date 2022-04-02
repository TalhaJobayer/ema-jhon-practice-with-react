import { useEffect, useState } from "react"

const useProducts=()=>{
    const [Products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [Products,setProducts];
}
export default useProducts;