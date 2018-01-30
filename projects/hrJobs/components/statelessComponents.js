import React from 'react';
import PropTypes from 'prop-types';

export const TableContainer = ({ }) => (
    <div></div>
);

export const TableRow = ({ classes, rowContent }) => {
    const rows = [];
    Object.keys(rowContent).forEach((el, ind) => {
        rows.push(<div key={ind} className={classes.rowItems} id={el}>{rowContent[el]}</div>);
    });
    return (
        <div className={classes.rowClass}>
            {rows}
        </div>
    );
};
TableRow.propTypes = {
    classes: PropTypes.shape({
        rowClass: PropTypes.string.isRequired,
        rowItems: PropTypes.string.isRequired
    }),
    rowContent: PropTypes.object.isRequired
};