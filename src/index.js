import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LineApp from './components/LineApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LineApp />, document.getElementById('root'));
registerServiceWorker();
