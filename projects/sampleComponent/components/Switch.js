import * as React from 'react';
import * as ReactDom from 'react-dom';

import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';

import '../styles/switchStyle.less';

const xhrParams = {
    baseURI: 'http://localhost:3000',
    searchURI: '/HRCards',
    paramsURI: '',
    method: 'GET',
    headers: [{ 'header': 'Accept', 'value': 'application/json' }, { 'header': 'odata', 'value': 'verbose' }]
};

const getData = () => {
    return new Promise((resolve, reject) => {
        const xHrCall = new XMLHttpRequest();
        xHrCall.open(xhrParams.method, xhrParams.baseURI + xhrParams.searchURI + xhrParams.paramsURI);
        if (xhrParams.headers) {
            xhrParams.headers.forEach(el => {
                xHrCall.setRequestHeader(el.header, el.value);
            });
        };
        xHrCall.onload = () => {
            if (xHrCall.status >= 200 && xHrCall.status < 300) {
                resolve(xHrCall.responseText);
            } else {
                reject(xHrCall.statusText);
            };
        };
        xHrCall.onerror = () => {
            reject(xHrCall.statusText);
        };
        xHrCall.send();
    });
};

const initialState = {
    isLoading: false,
    isErrored: false,
    data: []
};
//ACTIONS vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const fetchIsLoading = (isLoading) => {
    return {
        type: 'FETCH_IS_LOADING',
        isLoading: boolean
    };
};

const fetchIsErrored = (isErrored) => {
    return {
        type: 'FETCH_HAS_ERRORED',
        isErrored: boolean
    };
};

const fetchHasCompleted = (data) => {
    return {
        type: 'FETCH_HAS_COMPLETED',
        data
    };
};

const executeGetData = (dispatch) => {
    return (dispatch) => {
        getData().then((result) => {
            return JSON.parse(result);
        }).then((theData) => {
            dispatch(fetchHasCompleted(theData));
        }).catch((error) => {
            dispatch(fetchIsErrored(true));
        });
    };
};
//ACTIONS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//REDUCERS vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const fetchIsLoadingReducer = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case 'FETCH_IS_LOADING':
            return Object.assign(
                {},
                state,
                { isLoading: action.isLoading }
            );
        default:
            return state;
    };
};

const fetchHasIsErroredReducer = (state = initialState.isErrored, action) => {
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

const fetchHasCompletedReducer = (state = initialState.data, action) => {
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

const allTheReducers = combineReducers({
    fetchIsLoadingReducer,
    fetchHasIsErroredReducer,
    fetchHasCompletedReducer
});

//REDUCERS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const switchStore = createStore(allTheReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

switchStore.dispatch(executeGetData(switchStore.dispatch));
console.log(switchStore.getState());

const TableComponent = ({ }) => <div>hi!</div>;

ReactDom.render(
    <Provider store={switchStore}>
        <TableComponent />
    </Provider>,
    document.getElementById('contentContainer')
);

/*

import * as React from 'react';
import * as ReactDom from 'react-dom';

import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import '../styles/switchStyle.less';

const initialState = {
    onOff: 'off'
};

const setOnOff = onOff => {
    return { type: 'SET_ON_OFF', onOff };
};

const switchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ON_OFF':
            return Object.assign(
                {},
                state,
                { onOff: action.onOff }
            );
        default:
            return state;
    };
};

const switchStore = createStore(switchReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)));

const getData = function(){
    return fetch('http://localhost:3000/documents');
};

getData().then(
    success => console.log(success.json()),//Object.values(success.json()).forEach(el => console.log(el)),
    error => console.log(error)
);

const SwitchVisualComponent = ({ onOff, onOffEvent }) =>
        <label id='switchLabel'>
            <input type='checkbox' defaultValue = {onOff} onChange = {onOffEvent}/> 
            <div className='switchOn'>Switch Me On!</div>
            <div className='switchOff'>Switch Me Off!</div>
        </label>;

const SwitchComponent = () => 
    <div className='switchMain'>
        <SwitchContainerComponent />
    </div>;


const mapSwitchStateToProps = state => {
    return {
        onOff: switchReducer(state.onOff, setOnOff)
    };
};
const mapSwitchDispatchToProps = dispatch => {
    return {
        onOffEvent: (e) => {            
            dispatch(setOnOff(e.target['value'] === 'off'? 'on' : 'off'));
        }
    };
};

const SwitchContainerComponent = connect(mapSwitchStateToProps, mapSwitchDispatchToProps)(SwitchVisualComponent);

ReactDom.render(
    <Provider store={switchStore}>
        <SwitchComponent />
    </Provider>,
    document.getElementById('contentContainer')
);

*/
