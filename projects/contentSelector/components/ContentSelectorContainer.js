import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SubSectionPanel } from './SubSectionPanel';

import '../styles/ContentSelectorContainerStyles.less';

class ContentSelectorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            selection: 0
        };
    };
    componentDidMount() {
        this.props.returnDataToState(this.props.xHrParams, result => this.setState({ data: result, isLoading: false }));
    };

    render() {
        const echoClick = (e) => {
            const regExSearch = /([0-9])/;
            Number(e.target.className.match(regExSearch)[0]) === this.state.selection ? null : this.setState({ selection: Number(e.target.className.match(regExSearch)[0]) });
        };
        const arrSubSections = [], arrSubSectionTitles = [], arrContent = [];
        if (this.state.isLoading === true) {
            return (
                <div className='contentSelectorContainerClass'>
                    <div className='loadingView'></div>
                </div>
            );
        } else {
            this.state.data.forEach((el) => {
                if (arrSubSectionTitles.findIndex(subSec => subSec === el.SubSection) === -1) {
                    arrSubSectionTitles.push(el.SubSection);
                    if (this.state.selection === arrSubSectionTitles.indexOf(el.SubSection)) {
                        arrSubSections.push(<SubSectionPanel key={el.GUID} classAppend={arrSubSectionTitles.indexOf(el.SubSection)} SubSection={el.SubSection} selected={true} onClick={echoClick} />);
                    } else {
                        arrSubSections.push(<SubSectionPanel key={el.GUID} classAppend={arrSubSectionTitles.indexOf(el.SubSection)} SubSection={el.SubSection} selected={false} onClick={echoClick} />);
                    };
                };
                if (this.state.selection === arrSubSectionTitles.indexOf(el.SubSection)) {
                    arrContent.push(<div>{el.Title}</div>);
                };
            });
            return (
                <div className='contentSelectorContainerClass'>
                    <div className='subSectionContainerClass'>
                        {arrSubSections}
                    </div>
                    <div className='subSectionContentContainerClass'>
                        {arrContent}
                    </div>
                </div>
            );
        };
    };
};
export { ContentSelectorContainer };