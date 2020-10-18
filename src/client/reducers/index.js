import { combineReducers } from 'redux';
import productsReducer from './productsReducers'; 
import appReducer from './appReducers';
import productReducer from './productReducers';

export default combineReducers({
    products: productsReducer,
    initialAppData: appReducer,
    product: productReducer
});