import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/index';

const domain = "dev-la4nkwuq.us.auth0.com"
const client_id = "cAkrYWSsneDsy2bOTV2iiLppFYJBeL2Y"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>    
    <App /> 
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



