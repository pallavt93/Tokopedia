import axios from 'axios';
import actionTypes from '../enums/actionTypes';

export const fetchProducts = (pageNumber) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products?page=${pageNumber}`);

    dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res
    });
}


