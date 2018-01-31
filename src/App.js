import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Components/Table/Table';
import TableHeaderColumn from "./Components/TableHeaderColumn/TableHeaderColumn";

class App extends Component {
  state = {
    tableConfig: {
      columnHeaders: [
        {
          columnName: "name",
          displayName: "Name"
        },
        {
          columnName: "type",
          displayName: "Type"
        },
        {
          columnName: "name",
          displayName: "Name"
        },
        {
          columnName: "name",
          displayName: "Name"
        },
        {
          columnName: "name",
          displayName: "Name"
        },
        {
          columnName: "name",
          displayName: "Name"
        }
      ],
      jobs_data: [
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        },
        {
          name: "opp1",
          type: "dev",
          domain: "retail",
          startDate: "2017-12-11",
          infyMgr: "mgr1",
          oppPerc: "90",
          sponsor: "gap",
          status: "active",
          demand: [
            {
              skill: "java",
              size: 2,
              location: "onsite",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            },
            {
              skill: "python",
              size: 2,
              location: "offshore",
              startDate: "2017-12-11",
              endDate: "2018-12-11",
              demandId: "TMSID",
              demandStatus: "active"
            }
          ]
        }
      ]
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <Table data={this.state.tableConfig.jobs_data}>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Domain</TableHeaderColumn>
            <TableHeaderColumn>Start Date</TableHeaderColumn>
            <TableHeaderColumn>Infy Mgr</TableHeaderColumn>
            <TableHeaderColumn>Percentage</TableHeaderColumn>
            <TableHeaderColumn>Sponsor</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Demand</TableHeaderColumn>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
