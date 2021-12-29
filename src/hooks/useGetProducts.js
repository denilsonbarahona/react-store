import { useEffect, useState } from "react";
import axios from 'axios'

const useGetProduct =(API)=>{
    const [products, setProducts] = useState([]);
	useEffect(async()=>{
		const response = await axios(API);
		setProducts(response.data);
	},[]);

    return  products 
}


export default useGetProduct;