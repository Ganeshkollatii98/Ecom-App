
import {createStore,compose,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {ProductReducers} from "../Reducers/ProductReducers"
import {ProductDetailsReducers} from  "../Reducers/ProductDetailsReducers"

const initialState={
};
const reducer=combineReducers({
     ProductsList:ProductReducers,  
     ProductDetails:ProductDetailsReducers
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;