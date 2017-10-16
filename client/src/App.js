import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import myTheme from './my_modules/myTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import './index.css';
import MTable from './my_modules/MTable';

const colors = require('material-ui/styles/colors');

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: []};    
}

  componentDidMount() {
    fetch('/agents', {
      method: "get"
    })
    .then(response => response.json())
    .then(responseJson => this.setState({data : responseJson.agents}))
    .catch(error => alert(error.message + "\n" + error.stack ))
 }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>  
        <div id="title">
          Agents
        </div>
        <div id="mButton" >
        <FlatButton label="Clear" />
        </div>
        <div id="mTable" >
        <Divider/>
        <Paper zDepth={3}>
          <MTable data={this.state.data} headers={testmodel}/>
        </Paper>
        </div>
      </MuiThemeProvider>  
    );
  }
}

export default App;

const testmodel = [
  {name: "name", label: "Agent Name"}, 
  {name: "currentTest",label: "Current Test"}, 
  {name: "currentLoop",label: "Current Iteration"},
  {name: "currentDataId",label: "Current Data Id"},
  {name: "info",label: "Info"},
  {name: "lastUpdate",label: "Last Update"}
];

/*
const testdata = [{
  name: 'agent01',
  currentTest: 'Test5',
  currentLoop: 'N/A',
  currentDataId: 'N/A',
  info: 'N/A',
  lastUpdate: 65416516555
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
*/