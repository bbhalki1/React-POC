import React, { Component } from 'react';
import classes from './TableHeader.css'

export default class TableHeader extends Component {
    render() {
        return (
            <tr className={classes.TableHeader}>
                {this.props.children}
            </tr>
        );
    }
};
