import React from 'react'
import {Route,BrowserRouter} from "react-router-dom";
import Product from './Product'
import data from "../data";
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
export default function Main() {
    return (

        <div class="products-container   w-full flex flex-wrap  justify-around">
              {data.products.map((item)=>{
                  
                 return <Product product={item} key={item._id} />
                 
              })}
        </div>
    )
}
