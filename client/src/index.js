//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {deleteAgents,getAgents,submitAgent} from './api.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './my_modules/myTheme';
import Paper from 'material-ui/Paper';
import MyTable from './my_modules/myTable';
import MyAppbar from './my_modules/myAppbar';
import MyForm from './my_modules/myForm';
import openSocket from 'socket.io-client';


import './index.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: [],socketmessage:"", formVisible:"none"};  
    this.updateAgentsInfo = this.updateAgentsInfo.bind(this);  
    this.deleteAgentsInfo = this.deleteAgentsInfo.bind(this);  
    this.submitAgentInfo = this.submitAgentInfo.bind(this);  
    this.updateAgentsInfoAfterPush = this.updateAgentsInfoAfterPush.bind(this);
    this.updateMessageAfterPush = this.updateMessageAfterPush.bind(this);
    this.updateFormVisible = this.updateFormVisible.bind(this);
    
  }

   render() {


    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}><div>  
        <MyAppbar handleUpdateReq={this.updateAgentsInfo}
                  handleDeleteReq={this.deleteAgentsInfo} 
                  handleMakeFormVisibleReq={this.updateFormVisible} 
                  message={this.state.socketmessage}/>
        <div style={{"display":this.state.formVisible}}>
          <MyForm headers={testmodel}
                  handleSubmitReq={this.submitAgentInfo}/>
        </div>
        <div style={{"padding":"10px 0px 0px 0px"}}>
        <Paper zDepth={2}> 
          <MyTable data={this.state.data} 
                  headers={testmodel}/>
         </Paper> 
         </div>
      </div></MuiThemeProvider>  
    );
  }

  componentWillMount = function() {
    this.updateAgentsInfo();
    
    const socket = openSocket({transports: ['websocket','polling']});
    socket.on('senddata', this.updateAgentsInfoAfterPush);
    socket.on('sendmessage', this.updateMessageAfterPush);
  }

  updateStateAgentData = function(newdata) {
    this.setState({data : newdata});
  }
  updateStateMessage = function(newmessage) {
    this.setState({message : newmessage});
  }

  updateAgentsInfo = function() {
    getAgents().then(responseJson => this.setState({data : responseJson.agents}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  deleteAgentsInfo = function() {
    deleteAgents().then(responseJson => this.setState({data : responseJson.agents}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }
  
  submitAgentInfo = function(agentData) {
    submitAgent(agentData)
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  updateAgentsInfoAfterPush = function(newdata) {  
    this.setState({data : newdata});
  } 
  updateMessageAfterPush = function(newmessage) {
    this.setState({socketmessage : newmessage});
  } 
  updateFormVisible = function() {  
    this.setState({formVisible : (this.state.formVisible==="none" ? "inline" : "none") });
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

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
