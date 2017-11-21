import React from 'react';
import ReactDOM from 'react-dom';
import AgentInfoApp from './apps/AgentInfoApp';
import MyPageHeader from './my_modules/myPageHeader';
import LoadTestUI from './apps/LoadTestUI';

ReactDOM.render(<div>
                <div>
                <div><MyPageHeader/></div>
                <LoadTestUI/>   
                </div> 
    </div>, document.getElementById('root'));

