import axios from 'axios';
import actionTypes from '../enums/actionTypes';

export const fetchProducts = (pageNumber) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products?page=${pageNumber}`);

    dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res
    });
}

export const fetchProduct = (productNumber) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products/${productNumber}`);

    dispatch({
        type: actionTypes.FETCH_PRODUCT,
        payload: res
    });
}


