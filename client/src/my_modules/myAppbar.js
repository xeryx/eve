import React, { Component } from 'react';
import Appbar from 'material-ui/AppBar'
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class MyAppbar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {open: false,};
    }
    

    render() {
        return(
        <div>            
        <Appbar 
            title={<div>
                <div style={{"float":"left", "fontSize":"0.8em"}}>{this.props.schemaName}</div>
                <IconButton style={{"padding": "18px 0px 0px 0px"}} onClick={this.refreshItemHandler} >
                    <NavigationRefresh color="#abb3af"/>
                </IconButton> 
                </div>}
            id="pagetop"
            iconElementLeft={
                <IconButton onClick={this.menuButtonTouchHandler} >
                    <NavigationMenu/>
                </IconButton>
            }
            iconElementRight={
                <IconButton onClick={this.tableButtonTouchHandler} >
                    <NavigationExpandMore/>
                </IconButton>
            }
            zDepth={2}>
        </Appbar>
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.menuCloseHandler}>
            <Menu>
                <MenuItem 
                    primaryText="Clear agent list" 
                    onClick={this.clearItemHandler}
                    />
                <Divider/>
                <MenuItem 
                    primaryText="Test form..." 
                    onClick={this.formMenuHandler}
                    />
            </Menu>
        </Popover>
        </div>
        )
    } 
    
    menuButtonTouchHandler = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }
    menuCloseHandler = (event) => {
        this.setState({
            open: false,
        });
    }
    tableButtonTouchHandler = (event) => {
        this.props.updateTableVisible();
    }    
    formMenuHandler = (event) => {
        this.props.updateFormVisible();
        this.menuCloseHandler(event);
    }    
    clearItemHandler = (event) => {
        this.props.requestDataDelete(this.props.schemaName);
        this.menuCloseHandler(event);
    }   
    refreshItemHandler = (event) => {
        this.props.requestDataInfo(this.props.schemaName);
    }   
  
}

export default MyAppbar;