import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default function Rating(props) {
    const {rating,numReviews} =props;
    return (
        <div className="flex cursor-pointer pl-2 mt-3 pb-3  product-ratings ">
        <div className="text-yellow-500 pr-1">
        {rating}
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarHalfIcon style={{ fontSize: "1.3rem" }} />
        </div>
        <a href="#"><span className="text-gray-500 hover:text-gray-900">{numReviews} Reviews</span></a>
      </div>
    )
}
