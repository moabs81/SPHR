export const xHrParams = {
    baseURI: 'http://localhost:3000',
    endpointURI: '/Jobs',
    parametersURI: '',
    method: 'GET',
    headers: [
        { 'header': 'Accept', 'value': 'application/json' },
        { 'header': 'odata', 'value': 'verbose' }
    ]
};

export const getData = function () {
    return new Promise((resolve, reject) => {
        const xHrCall = new XMLHttpRequest();
        xHrCall.open(xHrParams.method, xHrParams.baseURI + xHrParams.endpointURI + xHrParams.parametersURI);
        if (xHrParams.headers) {
            xHrParams.headers.forEach(el => {
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
        xHrCall.onerror = () => reject(xHrCall.statusText);
        xHrCall.send();
    });
};