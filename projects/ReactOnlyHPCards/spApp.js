import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getData } from './routes/routes';

import ContainerComponent from './components/Container';

import './styles/testPageStyle.less';

const xHrParams = {
    baseURI: 'https://tsps.ncsecu.local/demo/S22307N',
    endpointURI: '/_api/web/lists/getbytitle(\'HRHomePageCardsList\')/items',
    parametersURI: '',
    method: 'GET',
    headers: [
        { 'header': 'Accept', 'value': 'application/json' },
        { 'header': 'odata', 'value': 'verbose' }
    ]
};

const returnDataToState = function (xHrParams, cbReturn) {
    getData(xHrParams).then((result) => {
        const arrResults = [];
        JSON.parse(result).value.forEach(el => {
            arrResults.push({
                GUID: el['odata.id'],
                TopPart: el.TopPart,
                BottomPart: el.Title,
                url: el.URL.Url,
                img: el.Img.Url
            });
        });
        cbReturn(arrResults);
    }).catch((error) => {
        return error;
    });
};

ReactDOM.render(<ContainerComponent xHrParams={xHrParams} returnDataToState={returnDataToState} />, document.getElementById('hrCardsContainer'));