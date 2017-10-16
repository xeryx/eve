import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


class MTable extends Component {

   render() {  

        var rows = [];
        var hd = [];

        for(var i=0; i<this.props.headers.length; i++) {
            hd.push(<TableHeaderColumn style={cellStyle}>{this.props.headers[i]["label"]}</TableHeaderColumn>);
        }

        var thisData = this.props.data

        thisData.forEach(function(dataObj) {
            rows.push(<TableRow> 
                <TableRowColumn style={cellStyle}>{dataObj.name}</TableRowColumn>
                <TableRowColumn style={cellStyle}>{dataObj.currentTest}</TableRowColumn>
                <TableRowColumn style={cellStyle}>{dataObj.currentLoop}</TableRowColumn>
                <TableRowColumn style={cellStyle}>{dataObj.currentDataId}</TableRowColumn>
                <TableRowColumn style={cellStyle}>{dataObj.info}</TableRowColumn>
                <TableRowColumn style={cellStyle}>{new Date(dataObj.lastUpdate).toLocaleTimeString()}</TableRowColumn>
                </TableRow> )
                
        }, this);

    return (
            <Table>
            <TableHeader 
                displaySelectAll={false} 
                adjustForCheckbox={false}>
            <TableRow> 
                {hd} 
            </TableRow>
            </TableHeader>
            <TableBody 
                displayRowCheckbox={false}
                stripedRows= {false}
                showRowHover = {true}>
                {rows}
          </TableBody>                  
        </Table>
    )

    }
}


const cellStyle = {
    "text-align": "center" 
};

export default MTable;
