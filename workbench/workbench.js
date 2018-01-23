import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import backgroundImage from './chalkboard.jpeg';
import './workbench.less';

import {getScrollPos, isBrowserIE, scrollPosReducer } from './components/actionsReducers';
import {TopMenu, BodyContent} from './components/functionalComponents';


console.log(typeof(backgroundImage));

//initial UI State
const initialState = {
    position: 200,
    isIE: false
};

//Create Store
const store = createStore(scrollPosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Connect Functions
const mapStateToProps = state => {
    return {
        position: scrollPosReducer(state.position, getScrollPos)
    };
};
const mapBottomStateToProps = state => {
    return{
        backgroundImage: backgroundImage
    };
};
const mapDispatchToProps = dispatch => {
    return {
        scrollEvent: () => {
            dispatch(getScrollPos(document.getElementById('contentContainer').getBoundingClientRect().top));
        }
    };
};
export const WorkBenchComponent = () => (
    <div className='workBenchMain'>
        <AnchoringTopContent />
        <ScrollingBottomContent />
    </div>
);

//Container Components
export const AnchoringTopContent = connect(mapStateToProps, null)(TopMenu);
export const ScrollingBottomContent = connect(mapBottomStateToProps, mapDispatchToProps)(BodyContent);

//Main
ReactDOM.render(
    <Provider store={store}>
        <WorkBenchComponent AnchoringTopContent = {AnchoringTopContent} ScrollingBottomContent = {ScrollingBottomContent} />
    </Provider>,
    document.getElementById('workBenchTarget')
);