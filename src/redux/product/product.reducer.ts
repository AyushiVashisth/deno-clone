import { Product } from "@/utils/types";
import { AppAction } from "./product.action";
import * as types from "./product.types"

interface ProductState {
    product: Product[],
    loading: boolean;
    error: boolean;
}
const initailState:ProductState = {
    product: [],
    loading: false,
    error: false
}

export const productReducer = (state: ProductState = initailState, action:AppAction):ProductState => {
    const {type} = action;
    switch(type){
        case types.PRODUCT_LOADING: {
            return {
                ...state, 
                loading:true, 
                error: false
            }
        }
        case types.GET_PRODUCT: {
            return {
                ...state,
                loading: false,
                error: false,
                product: action.payload
            }
        }
        case types.PRODUCT_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default: return state;
    }
}