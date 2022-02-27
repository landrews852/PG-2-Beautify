import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/index';

const domain = "beautify.us.auth0.com"
const client_id = "OrdQlvZeTosg7ug3kDik9EeY3k9hEolh"
const domainurl = "https://143.244.172.125/"
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      clientId={client_id} 
      redirectUri={domainurl}
      audience='https://beautify-api-pg/'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>  
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);




