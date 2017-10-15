import React, { Component } from 'react';
import RaisedButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class MTable extends Component {

   render() {  

        var rows = [];
        var hd = [];

        for(var i=0; i<this.props.headers.length; i++) {
            hd.push(<TableHeaderColumn>{this.props.headers[i]["label"]}</TableHeaderColumn>);
        }

        var thisData = this.props.data

        thisData.forEach(function(dataObj) {
            rows.push(<TableRow> 
                <TableRowColumn>{dataObj.name}</TableRowColumn>
                <TableRowColumn>{dataObj.currentTest}</TableRowColumn>
                <TableRowColumn>{dataObj.currentLoop}</TableRowColumn>
                <TableRowColumn>{dataObj.currentDataId}</TableRowColumn>
                <TableRowColumn>{dataObj.info}</TableRowColumn>
                <TableRowColumn>{new Date(dataObj.lastUpdate).toLocaleTimeString()}</TableRowColumn>
                </TableRow> )
                
        }, this);

    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Table id="mTable">
            <TableHeader>
            <TableRow> 
                {hd} 
            </TableRow>
            </TableHeader>
            <TableBody>
                {rows}
          </TableBody>                  
        </Table>
        </MuiThemeProvider>   
        
        
    )

    }
}

export default MTable;
