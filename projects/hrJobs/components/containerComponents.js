import React from 'react';
import PropTypes from 'prop-types';

import * as myStateless from './statelessComponents';

export const TableContainer = () => (
    <div className='tableContainer'>
        <myStateless.TableRow classes={{ rowClass: 'rowWhole', rowItems: 'rowItems' }} rowContent={{ Title: 'FSR', Department: 'Branch Ops', City: 'Raleigh' }} />
    </div>
);

export const mapStateToProps = state => {

};
export const mapDispatchToProps = dispatch => {

};