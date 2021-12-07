import React from 'react'
import Product from '../Components/Product'
import data from "../data";
export default function HomeScreen() {
    return (
        <div class="products-container pb-16  w-full flex flex-wrap  justify-around">
        {data.products.map((item)=>{      
           return <Product product={item} key={item._id} />
        })}
       </div>
    )
}
