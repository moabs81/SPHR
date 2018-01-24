const xHrReq = function () {
    const getData = new XMLHttpRequest();
    if (this.progress) {
        getData.addEventListener('progress', this.progress);
    };
    if (this.success) {
        getData.addEventListener('load', this.success);
    };
    if (this.error) {
        getData.addEventListener('error', this.error);
    };
    getData.open(this.method, this.baseURI + this.searchURI + this.paramsURI);
    if (this.headers) {
        this.headers.forEach(el => {
            getData.setRequestHeader(el.header, el.value);
        });
    };
    getData.send();
};

export default xHrReq;