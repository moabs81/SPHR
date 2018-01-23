import * as React from 'react';
import * as ReactDom from 'react-dom';

import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

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

const switchStore = createStore(switchReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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