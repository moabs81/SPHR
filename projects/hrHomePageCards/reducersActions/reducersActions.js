import xHrReq from '../../../workbench/xHrReq';

export const initialState = {
    cardsProps: []
};

export const setDataFetchParams = (cbReturn) =>{        
    const reqParams = {
        baseURI: 'http://localhost:3000',
        searchURI: '/HRCards',
        paramsURI: '',
        method: 'GET',
        headers: '',
        progress: function(result){
            return(result);
        },
        success: function(result){
            cbReturn(result);
        }
    };
    xHrReq.call(reqParams);    
};

export const fetchData = dispatch => {
     setDataFetchParams(function(result){        
        dispatch(onLoad(JSON.parse(result.target.responseText)));
    });
};

export const onLoad = result =>{    
    return {type:'FETCH_DATA',payload: result};
};

export const cardReducer = (state = initialState, action) => {
    switch(action.type){        
        case 'FETCH_DATA':            
            return Object.assign(
                {},
                state,
                {cardsProps: action.payload}
            );
        default:
            return state;
    };
};