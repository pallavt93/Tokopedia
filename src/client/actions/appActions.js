import axios from 'axios';
import actionTypes from '../enums/actionTypes';

export const fetchInitialAppData = () => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/home`);

    dispatch({
        type: actionTypes.FETCH_INITIAL_APP_DATA,
        payload: res
    });
}