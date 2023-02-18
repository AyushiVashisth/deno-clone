import { Cart } from "@/utils/types";
import { AppAction } from "./cart.action"

import * as types from "./cart.types"

interface  CartState {
    cart: Cart[],
    loading: boolean;
    error: boolean;
}
const initailState: CartState = {
    cart: [],
    loading: false,
    error: false
}

export const  cartReducer = (state:  CartState = initailState, action:AppAction): CartState => {
    const {type} = action;
    switch(type){
        case types. CART_LOADING: {
            return {
                ...state, 
                loading:true, 
                error: false
            }
        }
        case types.GET_CART: {
            return {
                ...state,
                loading: false,
                error: false,
                cart: action.payload,
            }
        }
        case types. CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        // case types.ADD_TO_CART: {
        //     return {
        //         ...state,
        //         loading: false,
        //         cart: [...state.cart, action.payload]
        //     }
        // }
        default: return state;
    }
}