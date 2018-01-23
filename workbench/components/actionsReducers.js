//initial UI State
const initialState = {
    position: 200,
    isIE: false
};
//Action
export const getScrollPos = function (position) {
    return { type: 'GET_POSITION', position };
};
export const isBrowserIE = function (isIE) {
    return { type: 'GET_BROWSER_TYPE', isIE };
};
//Reducer
export const scrollPosReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'GET_POSITION':
            return Object.assign(
                {},
                state,
                { position: action.position }
            );
        case 'GET_BROWSER_TYPE':
            return Object.assign(
                {},
                state,
                { isIE: action.isIE }
            );
        default:
            return state;
    };
    return state;
};