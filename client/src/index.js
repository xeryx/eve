//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './my_modules/myTheme';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import MyTable from './my_modules/myTable';
import MyAppbar from './my_modules/myAppbar';
import MyPopMenu from'./my_modules/myMenus';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: []};    
}

  componentDidMount = () => {

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
        <MyAppbar/> 
        <div id="mTable" >
        <Divider/>
        <Paper zDepth={2}> 
          <MyTable data={this.state.data} 
                  headers={testmodel}/>
         </Paper> 
         </div>
         <div>
            <MyPopMenu/>
         </div>

      </MuiThemeProvider>  
    );
  }
}

const testmodel = [
  {name: "name", label: "Agent Name"}, 
  {name: "currentTest",label: "Current Test"}, 
  {name: "currentLoop",label: "Current Iteration"},
  {name: "currentDataId",label: "Current Data Id"},
  {name: "info",label: "Info"},
  {name: "lastUpdate",label: "Last Update"}
];


ReactDOM.render(<App />, document.getElementById('root'));
