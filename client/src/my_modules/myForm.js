import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

class MyForm extends Component {

    constructor(props) {
        super(props); 

        var initialState = {};
        for(var i=0; i<this.props.headers.length; i++) {
            initialState[[this.props.headers[i].name]] = "Test_value";
        }
        this.state = {textValues:initialState};

    }

   render() {  
        var formFields = [];
       
        for(var i=0; i<this.props.headers.length; i++) {
            formFields.push(<div key={i} 
                style={{"margin": "20px"}}>
                    <TextField id={this.props.headers[i].name} floatingLabelText={this.props.headers[i].label}
                                onChange={this.handleTextChange}
                                value={this.state.textValues[this.props.headers[i].name]}/>
                    </div>);
        }

        return (
            <div><Paper zDepth={2}>
                <h3>Manual Agent editor</h3>
                <Divider/> 
                {formFields} <br/>
            <RaisedButton label="Submit" style={{"margin": "20px"}}
                onClick={this.submitHandler}
            />   
            </Paper></div>
        )

    }
    
    handleTextChange = (event) => { 
        var currentTextValues = this.state.textValues;
        currentTextValues[event.target.id] = event.target.value;
        this.setState({textValues:currentTextValues});

    }

    submitHandler = (event) => { 
        this.props.handleSubmitReq(this.state.textValues);     
    }  


}

export default MyForm;
