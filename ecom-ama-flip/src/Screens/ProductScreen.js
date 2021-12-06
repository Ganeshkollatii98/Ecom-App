import React from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom';
import data from "../data";
export default function ProductScreen(props) {
    const params = useParams();
    const product=data.products.find((p)=>p._id===params.id);
    
    return (
        
       <div className=" p-6 w-full min-h-screen bg-red-600">
        <div className= "pb-4">
        <Link to="/" className=" rounded-lg p-2  w-32 bg-yellow-300 uppercase border-2 border-green-800 "> Back To Home </Link>
        </div>
        <div className="product-container flex flex-col items-center sm:items-baseline mb-12">
            <div className="product-image w-10/12 h-10/12 md:w-5/12 h-4/12 sm:w-7/12  ">
            <img src={product.image} alt="product-image"></img>
            </div>
            <div>
                <h2>{}</h2>
            </div>
        </div>
        </div>
        

    )
}
