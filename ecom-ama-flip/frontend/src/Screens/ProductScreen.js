import React,{useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useParams ,useNavigate } from "react-router-dom";
import { useHistory } from 'react-router';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import history from 'history';
import Rating from "../Components/Rating.js";
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { detailsProduct } from "../Actions/ProductActions.js";

export default function ProductScreen(props) {
  const { id} = useParams();
  const history = useNavigate();
  const dispatch=useDispatch();
  const productDetails=useSelector((state)=>state.ProductDetails);
  
  const productId=id;
  const [qty, setQty] = useState(1);
  const {loading,error,product}=productDetails;

  useEffect(() => {
      dispatch(detailsProduct(productId));
  }, [dispatch,productId])

 const addToCartHandler =()=>{
          
     history.push(`/cart/${productId}?qty=${qty}`)
           console.log("AddToCart Button CLicked")
 }
  return (
     <>
      {loading ? (<LoadingBox/>) : error ?( <MessageBox err={error}/>) : (
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
          <img className="shadow-lg" alt="product-image" src={product.image} ></img>
        </div>
        <div className="product-info sm:ml-5 md:ml-10 w-10/12 md:w-6/12 sm:w-4/12">
          <div className=" ml-6 mt-2">
            <h2 className="font-extrabold hover:underline text-4xl text-black">
              {product.brand}
            </h2>
            <p className="text-black">{product.name}</p>
          </div>
          <div className="Rating ml-4 ">
            <Rating product={product} />
          </div>
          <div className="Rating ml-6 mt-1">
             <span className="text-black-700 font-bold text-xl mr-2">Status:</span>{product.countInStock!==0 ? <span className="text-green-700 font-bold text-xl uppercase">in Stock </span> : <span className="text-red-600 font-bold text-xl uppercase">out of stock</span>}
             
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
          <span className=" text-xl align-top font-bold text-black hover:text-blue-700">QTY: </span> 
          {/* <input type="number"  min="1" max="100"  style={{width:"4rem",height:"2rem",paddingLeft:"1rem",color: "black" ,fontSize:"1rem"  ,borderRadius:"2rem" ,border:"1px solid blue"}}  /> */}
            <select className="mb-4 w-12 border-2 border-black hover:border-2 hover:border-blue-700" value={qty} onChange={(e)=>setQty(e.target.value)}>
                 {[...Array(product.countInStock).keys()].map((c)=>(
                   <option key={c+1} value={c+1}>{c+1}</option>
                 ))}
            </select>
          </div>
          <div className=" ml-6  h-40 flex flex-col sm:flex-none md:block ">
          {/* <Link to={`/cart/${productId}?qty=${qty}`}> </Link>*/}
           <button onClick={addToCartHandler} type="submit" className="border-2 rounded-3xl  bg-blue-700 capitalize  text-white pl-3 pr-3 p-2 hover:bg-blue-800"> add to cart <ShoppingCartIcon className="pl-1 text-white"/></button>
            <button type="submit" className="mt-2 lg:mt-0 s border-2 rounded-3xl  bg-red-500 capitalize  text-white pl-4 pr-4 p-2 hover:bg-red-600"> wish list <FavoriteIcon/> </button>
          </div>
        </div>
      </div>
      </div>
      )}
      </>
    
  );
}
