import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getData } from '../utilityModules/routes';

import { ContentSelectorContainer } from './components/ContentSelectorContainer';

const xHrParams = {
    baseURI: 'http://localhost:3000',
    endpointURI: '/contentContainerDocuments',
    parametersURI: '?Section=Insurance`&&_sort=SubSection&_order=asc',
    method: 'GET',
    headers: [
        { 'header': 'Accept', 'value': 'application/json' },
        { 'header': 'odata', 'value': 'verbose' }
    ]
};

const returnDataToState = function (xHrParams, cbReturn) {
    getData(xHrParams).then(result => {
        const arrResults = [];
        JSON.parse(result).forEach(el => {
            arrResults.push(el);
        });
        cbReturn(arrResults);
    }).catch((error) => {
        return error;
    });
};

ReactDOM.render(<ContentSelectorContainer xHrParams={xHrParams} returnDataToState={returnDataToState} />, document.getElementById('contentContainer'));