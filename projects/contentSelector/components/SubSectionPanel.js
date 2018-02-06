import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/SubSectionPanelStyles.less';

export const SubSectionPanel = ({ SubSection, classAppend, selected, onClick }) => {
    const rowStyle = {
        fontWeight: selected ? 'bold' : 'normal',
        backgroundColor: selected ? 'rgb(15, 28, 70)' : 'rgb(37, 51, 99)',
        letterSpacing: selected ? '2px' : '0px'
    };

    return (
        <div className={'SubSectionRow index_' + classAppend} style={rowStyle} onClick={onClick}>
            {SubSection}
        </div>
    );
};