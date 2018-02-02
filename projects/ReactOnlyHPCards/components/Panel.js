import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/PanelStyle.less';

export const PanelComponent = ({ GUID, topPart, bottomPart, url, img }) => {
    console.log(img);
    const backgroundStyle = {
        backgroundImage: 'url(' + img + ')',
    };
    return (
        <a className='panelClass' href={url} style={backgroundStyle} target='blank'>
            <div className='panelContent'>
                <div className='topPart'>{topPart}</div>
                <div className='bottomPart'>{bottomPart}</div>
            </div>
        </a>
    );
};
