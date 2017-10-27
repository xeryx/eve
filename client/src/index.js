import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/app';
//import App_alt from './apps/app_alt';

ReactDOM.render(<div>
                <div>
                <App schemaName="Simple WADO"/>
                <App schemaName="Worklist"/>
                <App schemaName="Initial Display"/>
                </div> {/*}
                <div style={{"background-color":"rgba(163, 231, 186, 0.164)", "color":"white","text-align":"center"}}>
                <App_alt schemaName="Simple WADO"/>
                <App_alt schemaName="Worklist"/>
                <App_alt schemaName="Initial Display"/>
                    </div> */}
    </div>, document.getElementById('root'));
