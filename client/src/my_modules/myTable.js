import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
//  TableSortLabel
} from 'material-ui/Table';


class MyTable extends Component {

    constructor(props) {
        super(props); 
        this.state = {sortfield: "name", descendingorder:true};    
    }

    render() {  

        var thisData = this.props.data.sort(dynamicSort(this.state.sortfield))
        if(!this.state.descendingorder) {
            thisData.reverse();
        }

        var rows = [];
        var headerrows = [];

        for(var i=0; i<this.props.dataModel.length; i++) {
            if(this.props.dataModel[i].label.length>0) {
                headerrows.push(<TableHeaderColumn key={i} style={cellStyle(i)}>
                {this.props.dataModel[i].label}
                </TableHeaderColumn>);
            }
        }

       for(var k=0; k<thisData.length;k++) {
            var rowcols = [];
            for(var j=0; j<this.props.dataModel.length;j++) {
                if(this.props.dataModel[j].label.length>0) {
                    rowcols.push(<TableRowColumn key={j} 
                    style={cellStyle(j)}>
                    {thisData[k][this.props.dataModel[j].field]}
                    </TableRowColumn>)
                }
            }
            rows.push(<TableRow key={k}>{rowcols}</TableRow>)           
        }

        return (
            <Table 
                selectable={false}>
            <TableHeader 
                displaySelectAll={false} 
                adjustForCheckbox={false}>
            <TableRow onCellClick={(event) => (this.tableHeaderEventHandler(event))}> 
                {headerrows} 
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

    tableHeaderEventHandler = (event) => {
        var newSortField = this.props.dataModel[this.props.dataModel.findIndex(x => x.label===event.target.textContent)].field;
    
        if(this.state.sortfield !== newSortField) {
            this.setState({sortfield : newSortField, descendingorder:true});
        } else {
            this.setState({descendingorder : !this.state.descendingorder});
        }
    }
}

var dynamicSort = function(property) {
    var sortOrder = 1;
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


var cellStyle = function(columnNumber) {

    var width = ["10%","10%","10%","20%","5%","8%","10%","10%","10%","10%",];
    var dir = ["rtl","rtl","rtl","rtl","rtl","rtl","rtl","ltr","ltr","ltr"];


    return {
        "textAlign": "center",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "direction":dir[columnNumber],
        "width":width[columnNumber], 
    }

};

export default MyTable;
