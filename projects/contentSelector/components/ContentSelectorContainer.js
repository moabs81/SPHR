import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SubSectionPanel } from './SubSectionPanel';

import '../styles/ContentSelectorContainerStyles.less';

class ContentSelectorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        };
    };
    componentDidMount() {
        this.props.returnDataToState(this.props.xHrParams, result => this.setState({ data: result, isLoading: false }));
    };
    render() {
        const arrSubSections = [];
        if (this.state.isLoading === true) {
            return (
                <div className='contentSelectorContainerClass'>
                    <div className='loadingView'></div>
                </div>
            );
        } else {
            this.state.data.forEach(el => {
                if (arrSubSections.findIndex(subSec => subSec === el.SubSection) === -1) {
                    arrSubSections.push(<SubSectionPanel key={el.GUID} SubSection={el.SubSection} />);
                };
            });
            console.log(arrSubSections);
            return (
                <div className='contentSelectorContainerClass'>
                    <div className='loadingView'><span>THE EAGLE HAS LANDED</span></div>
                    <div className='SubSectionContainer'>
                        {arrSubSections}
                    </div>
                </div>
            );
        };
    };
};
export { ContentSelectorContainer };