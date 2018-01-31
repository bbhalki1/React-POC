import React, { Component } from 'react';
import TableHeader from './../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow';
import classes from './Table.css'
export default class Table extends Component {

    render() {
        return (
            
            <table className={classes.Table}>
                <thead>
                    <TableHeader>{this.props.children}</TableHeader>
                </thead>
                <tbody>
                <TableRow data={this.props.data} />
                </tbody>
          </table>
        );
    }
};
