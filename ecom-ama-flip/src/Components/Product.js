import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import React from 'react';
function Product() {
    return (
        
               <div className="product  m-6 w-4/12 md:w-3/12 h-auto  bg-white rounded-md">  
                      <div className="product-image ">
                      <a href="google.com"><img src="https://cdn.wccftech.com/wp-content/uploads/2019/04/OnePlus-7-2-1.jpg" alt="item"></img></a>
                      </div>
                      <div className="product_info">
                      <a href="#"><h2 className="text-xl uppercase pl-2 mt-2 bold">Oneplus</h2></a>
                            <div className="product-title pl-2">
                                <a href="#"><span className="text-sm text-gray-500 ">Oneplus 8pro</span></a>
                            </div>
                            <div className="product-title pl-2">
                                <span className="text-sm text-gray-700 ">Price:<b> 28000.0</b></span> 
                            </div>
                            <div  className="pl-2 pb-3 text-yellow-500 product-ratings ">
                            <StarIcon style={{fontSize: "1.3rem"}}/>
                            <StarIcon style={{fontSize: "1.3rem"}}/>
                            <StarIcon style={{fontSize: "1.3rem"}}/>
                            <StarIcon style={{fontSize: "1.3rem"}}/>
                            <StarHalfIcon style={{fontSize: "1.3rem"}}/>
                            </div>
                            
                      </div>
               </div>
  
    )
}
export default Product;
