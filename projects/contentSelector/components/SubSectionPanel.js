import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/SubSectionPanelStyles.less';

export const SubSectionPanel = ({ SubSection, classAppend, selected, onClick }) => {
    const rowStyle = {
        fontWeight: selected ? 'bold' : 'normal',
        letterSpacing: selected ? '2px' : '0px'
    };

    return (
        <div className='OuterSubSectionRow'>
            <div className={'InnerSubSectionRow index_' + classAppend} style={rowStyle} onClick={onClick}>
                {SubSection}
            </div>
        </div>
    );
};