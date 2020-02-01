import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={(<div>Loading</div>)}>
        <App />
    </Suspense>
    , document.getElementById('root'));
serviceWorker.unregister();