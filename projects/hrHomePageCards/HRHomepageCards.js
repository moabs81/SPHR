import * as React from 'react';
import * as ReactDom from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import { SingleCard } from './components/components';
import { fetchData, cardReducer } from './reducersActions/reducersActions';

const hrStore = createStore(cardReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//hrStore.dispatch(fetchData(hrStore.dispatch));
fetchData(hrStore.dispatch);

ReactDom.render(
    <SingleCard />, document.getElementById('contentContainer')
);