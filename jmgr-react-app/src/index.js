import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App/App';
import registerServiceWorker from './services/registerServiceWorker';
import './assets/styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
