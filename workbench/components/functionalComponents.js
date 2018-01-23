import React from 'react';
import PropTypes from 'prop-types';

export const TopMenu = ({ position }) => (
    <div className={position < 140 ? 'titleContainer titleContainerSolid' : 'titleContainer'}>
        <div className='menu'>
            <div className='menuContent leftTitle'>
                <h2>Component Demo Workbench</h2>
            </div>
        </div>
    </div>
);
TopMenu.propTypes = {
    position: PropTypes.number.isRequired
};

export const BodyContent = ({ scrollEvent, backgroundImage }) => (
    <div className='parallaxClass' id='allContentDiv' onScroll={scrollEvent}>
        <div className='parallax background'>
            <img id='backgroundImg' src={backgroundImage} />
        </div>
        <div className='parallax foreground'>
            <div className='contentContainer' id='contentContainer'></div>
        </div>
    </div>
);
BodyContent.propTypes = {
    scrollEvent: PropTypes.func.isRequired,
    backgroundImage: PropTypes.string.isRequired
};