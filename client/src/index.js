import React from 'react';
import ReactDOM from 'react-dom';
import AgentInfoApp from './apps/AgentInfoApp';
//import App_alt from './apps/app_alt';
//import LoadTestUI from './apps/LoadTestUI';

/*
ReactDOM.render(<div>
    <div>
    <LoadTestUI/>
    </div> 
</div>, document.getElementById('root'));
*/




ReactDOM.render(<div>
                <div>
                <AgentInfoApp schemaName="Simple WADO"/>
                <AgentInfoApp schemaName="Worklist"/>
                <AgentInfoApp schemaName="F8-F9"/>
                <AgentInfoApp schemaName="Initial Display"/>
                </div> 
    </div>, document.getElementById('root'));
