import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Display extends Component {

  render() {
    var data = [{
      "name": "opp1",
      "type": "dev",
      "domain": "retail",
      "startDate": "2017-12-11",
      "infyMgr": "mgr1",
      "oppPerc": "90",
      "sponsor": "gap",
      "status": "active"
    },{
      "name": "opp2",
      "type": "support",
      "domain": "retail",
      "startDate": "2017-12-12",
      "infyMgr": "mgr2",
      "oppPerc": "30",
      "sponsor": "gap",
      "status": "active"
    },{
      "name": "opp2",
      "type": "support",
      "domain": "retail",
      "startDate": "2017-12-12",
      "infyMgr": "mgr2",
      "oppPerc": "30",
      "sponsor": "gap",
      "status": "active"},
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      },
      {
        "name": "opp2",
        "type": "support",
        "domain": "retail",
        "startDate": "2017-12-12",
        "infyMgr": "mgr2",
        "oppPerc": "30",
        "sponsor": "gap",
        "status": "active"
      }
    ]
  
    return (
      <div>
        <BootstrapTable data={data} pagination striped hover>
          <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='domain'>Domain</TableHeaderColumn>
          <TableHeaderColumn dataField='startDate'>StartDate</TableHeaderColumn>
          <TableHeaderColumn dataField='InfyMgr'>Infosys Manager</TableHeaderColumn>
          <TableHeaderColumn dataField='oppPerc'>Opportunity Percentage</TableHeaderColumn>
          <TableHeaderColumn dataField='sponsor'>Sponsor</TableHeaderColumn>
          <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Display;
