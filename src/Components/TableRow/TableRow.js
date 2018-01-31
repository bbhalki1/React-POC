import React, {Component} from 'react';
import classes from './TableRow.css'
import ReactTooltip from 'react-tooltip'
import { Badge } from 'reactstrap';

export default class TableRow extends Component{
    
    
    showData(obj) {
        console.log(obj)
    }
    createRows(){
        const td_style = {
            cursor: 'pointer',
            display: 'inline-block',
            marginLeft: '1vw'
        }
        return this.props.data.map((obj,index) => {
            console.log(obj["name"])
            return <tr key={index} className={classes.TableRow}>
                <td>{obj["name"]}</td>
                <td>{obj["type"]}</td>
                <td>{obj["domain"]}</td>
                <td>{obj["startDate"]}</td>
                <td>{obj["infyMgr"]}</td>
                <td>{obj["oppPerc"]}</td>
                <td>{obj["sponsor"]}</td>
                <td>
                  <Badge color="success">{obj["status"]}</Badge>
                </td>
                <td colSpan={obj["demand"].length}>
                  {obj["demand"].length > 0 && obj["demand"].map(
                      (obj, index) => {
                        return <div style={td_style} key={index} data-tip data-for="demand">
                            Demand {index + 1}
                            <ReactTooltip id="demand">
                              <ul>
                                <li>
                                  Skill : {obj["skill"]}
                                </li>
                                <li>
                                  Size : {obj["size"]}
                                </li>
                                <li>
                                  Location :{" "}
                                  {obj["location"]}
                                </li>
                                <li>
                                  Demand Id :{" "}
                                  {obj["demandId"]}
                                </li>
                                <li>
                                  Start Date :{" "}
                                  {obj["startDate"]}
                                </li>
                                <li>
                                  End Date :{" "}
                                  {obj["endDate"]}
                                </li>
                                <li>
                                  Status :{" "}
                                  {obj["demandStatus"]}
                                </li>
                              </ul>
                            </ReactTooltip>
                          </div>;
                      }
                    )}
                </td>
              </tr>;
        })
    }
    render() {
        return this.createRows();
    }

    
};
