import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react'
import Rating from "./Rating";

function Product(props) {
   const {product}=props;
   const [heartIcon,setHeartIcon] = useState(false);
   
   var handleHeartIcon=()=>{
     setHeartIcon(true)
  
   }

  return (
    <div className="product relative  m-6 w-4/12 md:w-3/12 h-8/12  bg-white rounded-md shadow-2xl self-start">

      <div className="product-image h-5/12 ">
        <a href={`/product/${product._id}`}>
          <img
            src={product.image}
            alt="item"
          ></img>
        </a>
      </div>
      <div className="product_info ">
        <div className="AddToFavorite absolute right-4 cursor-pointer">
         {
           !heartIcon ? <FavoriteBorderIcon onClick={()=>handleHeartIcon()} style={{ fontSize: "1.3rem" }} className="text-gray-500" /> : <FavoriteIcon style={{ fontSize: "1.3rem" }} className="text-red-500" />   
         }
          
        </div>
        
          <h2 className="text-xl uppercase pl-2 mt-2 bold"><a href="#">{product.category}</a></h2>
        
        <div className="product-title pl-2">
          <a href={`/product/${product._id}`}>
            <span className="text-sm text-gray-500 ">{product.name}</span>
          </a>
        </div>
        <div className="product-title pl-2">
          <span className="text-sm text-gray-700 ">
            Price:<span className="font-bold text-black"> {product.price}.00</span>
          </span>
        </div>
        <Rating product={product}/>
      </div>
    </div>
  );
}
export default Product;
