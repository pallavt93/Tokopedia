import actionTypes from '../enums/actionTypes';

export default (state={}, action) => {
    switch(action.type){
        case actionTypes.FETCH_INITIAL_APP_DATA:
            console.log("data = ",action.payload.data);
            return action.payload.data;
        default:
            return state;

    }
}