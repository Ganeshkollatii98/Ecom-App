import React from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom';
import data from "../data";
export default function ProductScreen(props) {
    const params = useParams();
    const product=data.products.find((p)=>p._id===params.id);
    
    return (
        
        <div className="h-auto p-6 w-full bg-red-600">
        <div className= "pb-4">
        <Link to="/" className=" rounded-lg p-2  w-32 bg-yellow-300 uppercase border-2 border-green-800 "> Back To Home </Link>
        </div>
        <div className="product-container flex flex-col">
            <div className="product-image">
            <img src={product.image}  alt="product-image"></img>
            </div>
          
            
       
        </div>
        </div>
    )
}
