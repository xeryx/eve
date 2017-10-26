//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import React, { Component } from 'react';
import {getDataSchemas,getDataSchemaByName,deleteAllDataElements,getAllDataElements,submitDataElement} from './serverapi.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './misc/myTheme';
import Paper from 'material-ui/Paper';
import MyTable from './my_modules/myTable';
import MyAppbar from './my_modules/myAppbar';
import MyForm from './my_modules/myForm';
import openSocket from 'socket.io-client';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {schemas:[], data: [], formVisible:"none"}; 
     
    this.retrieveDataSchemas = this.retrieveDataSchemas.bind(this);  
    this.retrieveDataSchemaByName = this.retrieveDataSchemaByName.bind(this);  
    this.requestDataInfo = this.requestDataInfo.bind(this);  
    this.requestDataDelete = this.requestDataDelete.bind(this);  
    this.submitData = this.submitData.bind(this);  
    this.updateDataInfoAfterPush = this.updateDataInfoAfterPush.bind(this);
    this.updateFormVisible = this.updateFormVisible.bind(this);

    this.retrieveDataSchemaByName(this.props.schemaName);
    //this.retrieveDataSchemas();
    this.requestDataInfo(this.props.schemaName);


  }

   render() {    
    if(this.state.schemas.length < 1) {
      return(<div style={{"color":"white"}}>Loading {this.props.schemaName} app...</div>);
    }

    return (<div 
            style={{"padding":"10px 0px 10px 0px",
                    "display":((this.state.data.length > 0) ? "block" : "none")
                  }
            }>
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}><div>  

        <MyAppbar requestDataInfo={this.requestDataInfo}
                  requestDataDelete={this.requestDataDelete} 
                  updateFormVisible={this.updateFormVisible}
                  schemaName={this.props.schemaName}/>
        
        <div style={{"display":this.state.formVisible}}>
          <MyForm dataModel={this.state.schemas[0].model}
                  submitData={this.submitData}/>
        </div>
        
        <div style={{"padding":"10px 0px 0px 0px"}}>
          <Paper zDepth={2}> 
          <MyTable  data={this.state.data} 
                    dataModel={this.state.schemas[0].model}/>
          </Paper>
        </div>

      </div></MuiThemeProvider>  
    </div>);
  }

  componentWillMount = function() {

    const socket = openSocket({transports: ['websocket','polling']});
    socket.on('data_' + this.props.schemaName, this.updateDataInfoAfterPush);

  }
  retrieveDataSchemas = function() {
    getDataSchemas().then(responseJson => this.setState({models : responseJson}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  retrieveDataSchemaByName = function(schemaName) {
    var temp = this.state.schemas;
    getDataSchemaByName(schemaName).then(responseJson =>  {
                                      temp.push(responseJson);
                                      this.setState({schemas : temp}); }
    )
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  requestDataInfo = function(schemaName) {
    getAllDataElements(schemaName).then(responseJson => this.setState({data : responseJson.data}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  requestDataDelete = function() {
    deleteAllDataElements(this.props.schemaName).then(responseJson => this.setState({data : responseJson.data}))
    .catch(error => alert("Error: " + error.message + "\n" + error.stack));
  }
  
  submitData = function(dataElement) {
    submitDataElement(dataElement,this.props.schemaName)
    .catch(error => alert("Error: " + error.message + "\n" + error.stack))
  }

  updateDataInfoAfterPush = function(newdata) {  
    this.setState({data : newdata});

  } 
  updateFormVisible = function() {  
    this.setState({formVisible : (this.state.formVisible==="none" ? "inline" : "none") });

  } 
}

export default App;

