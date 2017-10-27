//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import React, { Component } from 'react';
import {getDataSchemaByName,deleteAllDataElements,getAllDataElements,submitDataElement} from '../serverapi.js'
import MyTable_alt from '../my_modules/myTable_alt'
import openSocket from 'socket.io-client';

import './app_alt.css';

class App_alt extends Component {
  constructor(props) {
    super(props); 

    this.state = {schema:"", data: []}; 
     
    this.retrieveDataSchemaByName = this.retrieveDataSchemaByName.bind(this);  
    this.requestDataInfo = this.requestDataInfo.bind(this);  
    this.requestDataDelete = this.requestDataDelete.bind(this);  
    this.submitData = this.submitData.bind(this);  
    this.updateDataInfoAfterPush = this.updateDataInfoAfterPush.bind(this);
    
    this.retrieveDataSchemaByName(this.props.schemaName);
    this.requestDataInfo(this.props.schemaName);


  }

   render() {
      if(this.state.schema.length < 1) {
        return(<div style={{"color":"black"}}>Loading {this.props.schemaName} app...</div>);
      }

      return (<div>  
                <MyTable_alt  data={this.state.data} 
                              dataModel={this.state.schema.model}
                              schemaName={this.props.schemaName}/>
            </div>);
  }

  componentWillMount = function() {

    const socket = openSocket({transports: ['websocket','polling']});
    socket.on('data_' + this.props.schemaName, this.updateDataInfoAfterPush);

  }

  retrieveDataSchemaByName = function(schemaName) {
    getDataSchemaByName(schemaName).then(responseJson =>  this.setState({schema : responseJson}))
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
   
}

export default App_alt;

