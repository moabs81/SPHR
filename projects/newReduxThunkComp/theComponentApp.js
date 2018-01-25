import React, { Component } from 'react';
import * as ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, applyMiddlewear, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

export class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    label: 'list item 1'
                },
                {
                    id: 2,
                    label: 'list item 2'
                },
                {
                    id: 3,
                    label: 'list item 3'
                },
                {
                    id: 4,
                    label: 'list item 4'
                }
            ],
            hasErrored: false,
            isLoading: false
        };
    };
    render() {
        if (this.state.hasErrored) {
            return <div>Sorry! There was a an error</div>;
        };
        if (this.state.isLoading) {
            return <div>Loading, loading, loading...</div>;
        };
        return (
            <ul>
                {this.state.items.map((item) => {
                    <li key={item.id}>
                        {item.label}
                    </li>
                })}
            </ul>
        );
    };
};