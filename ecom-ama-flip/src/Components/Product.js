import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from "./Rating";
import React from "react";
function Product() {
  return (
    <div className="product relative  m-6 w-4/12 md:w-3/12 h-auto  bg-white rounded-md shadow-2xl">

      <div className="product-image ">
        <a href="google.com">
          <img
            src="https://cdn.wccftech.com/wp-content/uploads/2019/04/OnePlus-7-2-1.jpg"
            alt="item"
          ></img>
        </a>
      </div>
      <div className="product_info">
        <div className="AddToFavorite absolute right-4 cursor-pointer">
          <FavoriteBorderIcon style={{ fontSize: "1.3rem" }} className="text-gray-500 "/> 
        </div>
        
          <h2 className="text-xl uppercase pl-2 mt-2 bold"><a href="#">Oneplus</a></h2>
        
        <div className="product-title pl-2">
          <a href="#">
            <span className="text-sm text-gray-500 ">Oneplus 8pro</span>
          </a>
        </div>
        <div className="product-title pl-2">
          <span className="text-sm text-gray-700 ">
            Price:<b> 28000.0</b>
          </span>
        </div>
        <Rating/>
      </div>
    </div>
  );
}
export default Product;
