// import statements for library stuff
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

//import statements for my code
import { allTheReducers } from './reducersActions/reducers';
import { TableContainer } from './components/containerComponents';

import { executeFetch } from './reducersActions/actionsAndConstants';

const store = createStore(allTheReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.dispatch(executeFetch(store.dispatch));

ReactDom.render(
    <Provider store={store} >
        <TableContainer />
    </Provider>, document.getElementById('contentContainer')
);