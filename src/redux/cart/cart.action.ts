import { Cart } from "@/utils/types";
import { AppDispatch } from "../store";
import { addItemToCartAPI, getCartAPI } from "./cart.api";
import * as types from "./cart.types";

export interface ICartLoading {
    type: typeof types.CART_LOADING;
}

export interface ICartError{
    type: typeof types.CART_ERROR
}

export interface IGetCart{
    type: typeof types.GET_CART, 
    payload: Cart[];
}

export interface IAddToCart{
    type: typeof types.ADD_TO_CART, 
    payload: Cart[];
}
export type AppAction = ICartLoading | ICartError | IGetCart;

const cartLoading= ():ICartLoading => {
    return {
        type: types.CART_LOADING
    };
}
const cartError= ():ICartError => {
    return {
        type: types.CART_ERROR
    };
} 

const getcart= (data:Cart[]):IGetCart => {
    return {
        type: types.GET_CART,
        payload: data
    };
}

const addToCart= (data:Cart[]):IAddToCart => {
    return {
        type: types.ADD_TO_CART,
        payload: data
    };
}


export const getCart = ():any => async(dispatch: AppDispatch) => {
    dispatch(cartLoading());
    try {
        let data = await getCartAPI();
        if(data){
            dispatch(getcart(data));
            // console.log("data",data);
        }
    }
    catch(e){
        dispatch(cartError());
    }
};

export const addItemToCart = (productId: number, quantity: number):any => async(dispatch: AppDispatch) => {
    dispatch(cartLoading());
    try {
        let data:any = await addItemToCartAPI(productId, quantity);
        if(data){
            dispatch(getcart(data));
            console.log("data",data);
        }
    }
    catch(e){
        dispatch(cartError());
    }
};