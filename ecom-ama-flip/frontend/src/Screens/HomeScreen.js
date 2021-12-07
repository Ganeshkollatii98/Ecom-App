import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../Components/Product'
import data from "../data";
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox'
export default function HomeScreen() {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState()
     useEffect(() => {
        const featchData= async()=>{
            try{
                setLoading(true);
                const {data}=await axios.get('/api/products')
                setLoading(false);
                setProducts(data);
            }
            catch(error){
               setError(error.message);
               setLoading(false);
            }

        } 
        featchData();
       
     }, [])


    return (
        <div >
        {loading ? (<LoadingBox/>) : error ?( <MessageBox err={error}/>) : 
          (<div class="products-container pb-16  w-full flex flex-wrap  justify-around">
            {products.map((item)=>{      
           return <Product product={item} key={item._id} />
        })}
          </div>)
          
        }
    
       </div>
    )
}
