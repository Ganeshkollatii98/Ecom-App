import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
export default function Rating(props) {
    const {rating,numReviews} =props.product;
    return (
        <div className="flex cursor-pointer pl-2  pb-3  product-ratings ">
        <div className="text-yellow-500 pr-1">
         
         {rating>=1 ? <StarIcon  style={{ fontSize: "1.3rem" }} /> : rating>=0.5 ?<StarHalfIcon style={{ fontSize: "1.3rem" }} />:<StarOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} />}
         {rating>=2 ? <StarIcon style={{ fontSize: "1.3rem" }} /> : rating>=1.5 ?<StarHalfIcon style={{ fontSize: "1.3rem" }} />:<StarOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} />}
         {rating>=3 ? <StarIcon style={{ fontSize: "1.3rem" }} /> : rating>=2.5 ?<StarHalfIcon style={{ fontSize: "1.3rem" }} />:<StarOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} />}
         {rating>=4 ? <StarIcon style={{ fontSize: "1.3rem" }} /> : rating>=3.5 ?<StarHalfIcon style={{ fontSize: "1.3rem" }} />:<StarOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} />}
         {rating>=5 ? <StarIcon style={{ fontSize: "1.3rem" }} /> : rating>=4.5 ?<StarHalfIcon style={{ fontSize: "1.3rem" }} />:<StarOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} />}


        {/* <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarHalfIcon style={{ fontSize: "1.3rem" }} />
         <StarOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} /> */}
        </div>
        <a href="#"><span className=" font-bold hover:text-gray-900">{rating}({numReviews})</span></a>
      </div>
    )
}
