//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import React, { Component } from 'react';
import {} from '../serverapi.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../themes/myTheme';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import openSocket from 'socket.io-client';

import './LoadTestUI.css';

class LoadTestUI extends Component {
  constructor(props) {
    super(props); 

    this.state = {}; 
     
  }

   render() {    

    return (<div>
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}><div> 
        <div>
          <RaisedButton label="Test"/>
        </div>
      </div></MuiThemeProvider>  
    </div>);
  }

  componentWillMount = function() {

    const socket = openSocket({transports: ['websocket','polling']});
    socket.on('data_' + this.props.schemaName, this.updateDataInfoAfterPush);

  }


}

export default LoadTestUI;

