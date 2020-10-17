import actionTypes from '../enums/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS:
            return [...state, ...action.payload.data.data];
        default:
            return state;

    }
}

export default (state={}, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCT:
            console.log("product = ", action.payload.data);
            return action.payload.data;
        default:
            return state;

    }
}