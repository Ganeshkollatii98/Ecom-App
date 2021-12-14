import React, { useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
// import axios from 'axios';
import Product from '../Components/Product'
// import data from "../data";
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox'
import {listProducts} from "../Actions/ProductActions"
export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList=useSelector((state)=>state.ProductsList);
    // console.log(productList)
    const {loading,error,products}=productList;
    
     useEffect(() => {
          dispatch(listProducts());
     }, [dispatch])


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
