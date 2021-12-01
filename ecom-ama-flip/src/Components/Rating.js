import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default function Rating() {
    return (
        <div className="flex cursor-pointer pl-2 mt-3 pb-3  product-ratings ">
        <div className="text-yellow-500 pr-1">
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarIcon style={{ fontSize: "1.3rem" }} />
        <StarHalfIcon style={{ fontSize: "1.3rem" }} />
        </div>
        <span >10 Reviews</span>
      </div>
    )
}
