import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class MyTable_alt extends Component {
    
    render() {

        var headers = [];        

        for(var i=0; i<this.props.dataModel.length; i++) {
            headers.push({
                Header: this.props.dataModel[i].label,
                accessor: this.props.dataModel[i].field,
            });
        }


        return (
            <div> 
                <HeaderArea schemaName={this.props.schemaName}/>
                <ReactTable className="rtable -highlight -striped"
                    data={this.props.data}
                    columns={headers}
                    defaultPageSize={5}
                    minRows={3} />
            </div>        

        );
    }
}    

class HeaderArea extends Component {
    render() { 
        return (
        <div>
            <div> {this.props.schemaName} </div>
        </div>
    )}
}


const columns = [{
    Header: 'Name',
    accessor: 'name' //
  }, {
    Header: 'Current Test',
    accessor: 'currentTest',
  }, {
    Header: 'Current Loop',
    accessor: 'currentLoop',
  }, {
    Header: 'Current Data Id',
    accessor: 'currentDataId',
  }, {
    Header: 'Info',
    accessor: 'info',
  }, {
    id: 'timestampColumn', // Required because our accessor is not a string
    Header: 'Last Update',
    accessor: d => new Date(d.lastUpdate).toLocaleTimeString() // Custom value accessors!
  }]


const testdata = [{
    name: 'agent01',
    currentTest: 'Test1',
    currentLoop: 'N/A',
    currentDataId: 'N/A',
    info: 'N/A',
    lastUpdate: 65416516554
    } , {
    name: 'agent02',
    currentTest: 'Test2',
    currentLoop: 'N/A',
    currentDataId: 'N/A',
    info: 'N/A',
    lastUpdate: 46549424564
    },{
    name: 'agent03',
    currentTest: 'Test3',
    currentLoop: 'N/A',
    currentDataId: 'N/A',
    info: 'N/A',
    lastUpdate: 6549846654654
    },{
    name: 'agent04',
    currentTest: 'Test4',
    currentLoop: 'N/A',
    currentDataId: 'N/A',
    info: 'N/A',
    lastUpdate: 1507323999999
    }
];

export default MyTable_alt;