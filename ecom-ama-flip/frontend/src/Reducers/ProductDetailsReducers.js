import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS} from "../contants/productContaints";

export const ProductDetailsReducers=(state={products:{},loading:true},action)=>{
     switch (action.type) {
         case PRODUCT_DETAILS_REQUEST:
           return {loading:true}
             
        case PRODUCT_DETAILS_SUCCESS:
             return {loading:false ,product:action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:true ,error:action.payload}
         default:
             return state;
     }
}

