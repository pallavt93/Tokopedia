import { combineReducers } from 'redux';
import productsReducer from './productsReducers'; 
import appReducer from './appReducers';

export default combineReducers({
    products: productsReducer,
    initialAppData: appReducer
});