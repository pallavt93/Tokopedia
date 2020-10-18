import axios from 'axios';
import actionTypes from '../enums/actionTypes';

export const fetchProduct = (productId) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products/${productId}`);

    dispatch({
        type: actionTypes.FETCH_PRODUCT,
        payload: res
    });
}