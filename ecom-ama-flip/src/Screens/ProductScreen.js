import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import data from "../data";
import Rating from "../Components/Rating.js";
export default function ProductScreen(props) {
  const params = useParams();
  const product = data.products.find((p) => p._id === params.id);

  return (
    <div className="p-6 w-full min-h-screen  ">
      <div className="pb-4">
        <Link
          to="/"
          className=" rounded-md p-1  w-32 bg-blue-900 uppercase border-1  font-bold text-white"
      >
          Back To Home
        </Link>
      </div>
      <div class="product-container ml-4 flex flex-col  sm:flex-row  md:flex-row mb-12">
        <div className=" product-image ml-6 sm:ml-2 w-10/12 md:w-5/12  sm:w-7/12  ">
          <img className="shadow-lg" src={product.image} alt="product-image"></img>
        </div>
        <div className="product-info sm:ml-5 md:ml-10 w-10/12 md:w-6/12 sm:w-4/12">
          <div className=" ml-6 mt-2">
            <h2 className="font-extrabold hover:underline text-4xl text-black">
              {product.brand}
            </h2>
            <p className="text-black">{product.name}</p>
          </div>
          <div className="Rating ml-4 mt-1">
            <Rating product={product} />
          </div>
          <div className="Prices ml-6 mt-0 flex flex-col">
            <p className="font-extrabold ">
              Old Price: <span className="text-red-500 line-through"> {product.old_price}.00</span>
            </p>
            <p className="font-extrabold ">
              New Price: <span className="text-blue-500">{product.price}.00</span>
            </p>
          </div>
          <div className="about brand ml-6 w-11/12 md:w-9/12 sm:w-5/12">
              <h1 className="capitalize text-2xl mt-3 text-black font-bold hover:underline">about this item:</h1>
               <p className=" sm: text-justify mt-3  hover:text-gray-800 ">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               </p>
          </div>
          <div className=" ml-6 mt-6 ">
          <span className=" text-xl align-top text-bold">QTY: </span> <input type="number" min="1" max="100"  style={{width:"4rem",height:"2rem",paddingLeft:"1rem",color: "black" ,fontSize:"1rem"  ,borderRadius:"2rem" ,border:"1px solid blue"}}  />
          </div>
          <div className=" ml-6  h-40 flex flex-col sm:flex-none md:block ">
            <button type="submit" className="border-2 rounded-3xl  bg-blue-700 capitalize  text-white pl-3 pr-3 p-2 hover:bg-blue-800"> add to cart <ShoppingCartIcon className="pl-1 text-white"/></button>
            <button type="submit" className="mt-2 lg:mt-0 s border-2 rounded-3xl  bg-red-500 capitalize  text-white pl-4 pr-4 p-2 hover:bg-red-600"> wish list <FavoriteIcon/> </button>
          </div>
        </div>
      </div>
    </div>
  );
}
