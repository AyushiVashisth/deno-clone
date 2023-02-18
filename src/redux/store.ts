import { 
    combineReducers, 
    legacy_createStore,
    compose,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})


export const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
export type RootState= ReturnType<typeof store.getState>;

type DispatchFn = () => AppDispatch;
export const useAppDispatch: DispatchFn = useDispatch;
export const userAppSelector: TypedUseSelectorHook<RootState> = useSelector;