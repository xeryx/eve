import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './app.css';

ReactDOM.render(<div>
                <App schemaName="Simple WADO"/>
                <App schemaName="Worklist"/>
                <App schemaName="Initial Display"/>
                </div>, document.getElementById('root'));
