import { getData } from './routes';

export const initialState = {
    isErrored: false,
    data: []
};

export const fetchIsErrored = function (isErrored) {
    return {
        type: 'FETCH_HAS_ERRORED',
        isErrored: boolean
    };
};

export const fetchHasCompleted = function (data) {
    return {
        type: 'FETCH_HAS_COMPLETED',
        data
    };
};

export const executeFetch = function (dispatch) {
    return function (dispatch) {
        getData().then((result) => {
            return JSON.parse(result);
        }).then((theData) => {
            dispatch(fetchHasCompleted(theData));
        }).catch((error) => {
            dispatch(fetchIsErrored(true));
        });
    };
};