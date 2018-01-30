import { combineReducers } from 'redux';
import * as actionsAndState from './actionsAndConstants';

export const fetchIsErroredReducer = function (state = actionsAndState.initialState.isErrored, action) {
    switch (action.type) {
        case 'FETCH_HAS_ERRORED':
            return Object.assign(
                {},
                state,
                { isErrored: action.isErrored }
            );
        default:
            return state;
    };
};

export const fetchHasCompletedReducer = function (state = actionsAndState.initialState.data, action) {
    switch (action.type) {
        case 'FETCH_HAS_COMPLETED':
            return Object.assign(
                {},
                state,
                { data: action.data }
            );
        default:
            return state;
    };
};

export const allTheReducers = combineReducers({
    fetchIsErroredReducer,
    fetchHasCompletedReducer
});