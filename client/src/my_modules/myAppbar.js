import React, { Component } from 'react';
import Appbar from 'material-ui/AppBar'
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class MyAppbar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {open: false,};
    }
    

    render() {
        return(
        <div>            
        <Appbar 
            title="Agent info" 
            id="pagetop"
            iconElementLeft={
                <IconButton onClick={this.menuButtonTouchHandler} >
                    <NavigationMenu/>
                </IconButton>
            }
            iconElementRight={
                <IconButton onClick={this.formButtonTouchHandler} >
                    <NavigationExpandMore/>
                </IconButton>
            }
            zDepth="2">
        </Appbar>
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.menuCloseHandler}>
            <Menu>
                <MenuItem primaryText="Clear agent list" />
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

    formButtonTouchHandler = (event) => {
        alert("Form");
    }    

}

export default MyAppbar;