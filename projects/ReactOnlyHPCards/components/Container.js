import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getData } from '../routes/routes';

import { PanelComponent } from './Panel';

import '../styles/ContainerStyle.less';

class ContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        };
    };
    componentDidMount() {
        this.props.returnDataToState(this.props.xHrParams, result => {
            this.setState({ data: result, isLoading: false });
        });
    };
    render() {
        if (this.state.isLoading === true) {
            return (
                <div className='panelContainerClass'>
                    <div className='loadingView'></div>
                </div>
            );
        };
        if (this.state.data.length > 0) {
            const arrElements = [];
            this.state.data.forEach(el => {
                arrElements.push(
                    <PanelComponent
                        key={el.GUID}
                        GUID={el.GUID}
                        topPart={el.TopPart}
                        bottomPart={el.BottomPart}
                        url={el.url}
                        img={el.img}
                    />
                );
            });
            return (
                <div className='panelContainerClass'>
                    {arrElements}
                </div>
            );
        };
    };
};


export default ContainerComponent;