import React from 'react'
import Product from './Product'
import data from "../data";

export default function Main() {
    return (
        <div class="products-container   w-full flex flex-wrap  justify-around">
              {data.products.map((item)=>{
                  
                 return <Product product={item} key={item._id} />
                 
              })}
        </div>
    )
}
