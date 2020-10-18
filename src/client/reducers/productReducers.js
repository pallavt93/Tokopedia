import actionTypes from '../enums/actionTypes';

export default (state={}, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCT:
            return action.payload.data;
        default:
            return state;

    }
}