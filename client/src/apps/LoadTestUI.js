//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import React, { Component } from 'react';
import {getAllTestRuns, getSystemUnderTestResources,getPageResults} from '../serverapi.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../themes/myTheme';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import openSocket from 'socket.io-client';
import JSONTree from 'react-json-tree';

import './LoadTestUI.css';

class LoadTestUI extends Component {
  constructor(props) {
    super(props); 

    this.state = {dataJson:{}}; 

    this.getAllTestRunsInfo = this.getAllTestRunsInfo.bind(this); 
    this.getSystemUnderTestResourcesInfo = this.getSystemUnderTestResourcesInfo.bind(this); 
    this.getPageResultsInfo = this.getPageResultsInfo.bind(this); 

    //this.getAllTestRunsInfo();
    //this.getSystemUnderTestResourcesInfo(2892);
    this.getPageResultsInfo(2892);
    


     
  }

   render() {    

    return (<div>
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}><div> 
        <div>
        <JSONTree data={this.state.dataJson}/>
        </div>
      </div></MuiThemeProvider>  
    </div>);
  }


  getAllTestRunsInfo = function() {
    getAllTestRuns().then(responseJson =>  this.setState({dataJson : responseJson}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  getSystemUnderTestResourcesInfo = function(runId) {
    getSystemUnderTestResources(runId).then(responseJson =>  this.setState({dataJson : responseJson}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }
  getPageResultsInfo = function(runId) {
    getPageResults(runId).then(responseJson =>  this.setState({dataJson : responseJson}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }


}

export default LoadTestUI;

