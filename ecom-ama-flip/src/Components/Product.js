import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import React from 'react';
function Product() {
    return (
        
               <div className="product  m-2 w-4/12 md:w-3/12 h-auto  bg-gray-500 rounded-md">  
                      <div className="product-image ">
                      <a href="google.com"><img src="https://cdn.wccftech.com/wp-content/uploads/2019/04/OnePlus-7-2-1.jpg" alt="item"></img></a>
                      </div>
                      <div className="product_description">
                            <div className="product-ratings">
                            Rating
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarHalfIcon/>
                            </div>
                            <div className="product-title">
                                shirt
                            </div>
                      </div>
               </div>
  
    )
}
export default Product;
