import React, {Component}  from 'react';
import classes from "./TableHeaderColumn.css";

export default class TableHeaderColumn extends Component {
    
    render() {
        return (
            <th className={classes.TableHeaderColumn}>
                {this.props.children}
            </th>
        );
    }  
};
