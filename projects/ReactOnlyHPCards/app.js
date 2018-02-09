import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getData } from './routes/routes';

import ContainerComponent from './components/Container';

const xHrParams = {
    baseURI: 'http://localhost:3000',
    endpointURI: '/HRCards',
    parametersURI: '',
    method: 'GET',
    headers: [
        { 'header': 'Accept', 'value': 'application/json' },
        { 'header': 'odata', 'value': 'verbose' }
    ]
};


//this.setState({ data: theData, isLoading: false });

const returnDataToState = function (xHrParams, cbReturn) {
    getData(xHrParams).then((result) => {
        const arrResults = [];
        JSON.parse(result).forEach(el => {
            arrResults.push({
                GUID: el.GUID,
                TopPart: el.TopPart,
                BottomPart: el.BottomPart,
                url: el.url,
                img: el.img
            });
        });
        cbReturn(arrResults);
    }).catch((error) => {
        return error;
    });
};

ReactDOM.render(<ContainerComponent xHrParams={xHrParams} returnDataToState={returnDataToState} />, document.getElementById('contentContainer'));
