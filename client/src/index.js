import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/index';

const domain = "beautify.us.auth0.com"
const client_id = "ae6Z5gbTJfzSVNvlut5Q4JKngbb5kyFY"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      clientId={client_id} 
      redirectUri={window.location.origin}
      audience='https://beautify-api-pg/'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>  
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);




