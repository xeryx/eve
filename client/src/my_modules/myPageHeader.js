import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../themes/myTheme';


class MyPageHeader extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {};    
    }

    render() {  
        return(
            <div style={{"padding":"10px 0px 20px 0px",}}>
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}><div>
                <Paper >
                <div style={{ "font-size":"1.5em", "color":myTheme.palette.secondaryTextColor}}> Load test summary</div> 
                </Paper> 
                </div></MuiThemeProvider>  
            </div>
        )
    }
}          

export default MyPageHeader;