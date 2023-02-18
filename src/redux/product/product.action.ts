import { Product } from "@/utils/types";
import { AppDispatch } from "../store";
import { getProductsAPI } from "./product.api";
import * as types from "./product.types";

export interface IProductLoading {
    type: typeof types.PRODUCT_LOADING
}

export interface IProductError{
    type: typeof types.PRODUCT_ERROR
}

export interface IGetProduct{
    type: typeof types.GET_PRODUCT, 
    payload: Product[];
}

export type AppAction = IProductLoading | IProductError | IGetProduct;

const productLoading= ():IProductLoading => {
    return {
        type: types.PRODUCT_LOADING
    };
}
const productError= ():IProductError => {
    return {
        type: types.PRODUCT_ERROR
    };
} 

const getproduct= (data:Product[]):IGetProduct => {
    return {
        type: types.GET_PRODUCT,
        payload: data
    };
}

export const getProducts = ():any => async(dispatch: AppDispatch) => {
    dispatch(productLoading());
    try {
        let data = await getProductsAPI();
        if(data){
            dispatch(getproduct(data));
            console.log("data",data);
        }
    }
    catch(e){
        dispatch(productError());
    }
};