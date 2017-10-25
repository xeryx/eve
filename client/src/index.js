import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';


ReactDOM.render(<div>
                <App schemaName="Scrolling"/>
                <App schemaName="Worklist"/>
                </div>, document.getElementById('root'));
