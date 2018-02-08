import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ContentPanelStyles.less';

export const ContentPanel = ({ title, url }) => {
    return (
        <div className='contentDiv'>
            <a className='contentLink' href={url}>{title}</a>
        </div>

    );
};