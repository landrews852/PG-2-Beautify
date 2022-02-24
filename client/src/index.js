import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/index';

const domain = "dev-la4nkwuq.us.auth0.com"
const client_id = "cAkrYWSsneDsy2bOTV2iiLppFYJBeL2Y"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      clientId={client_id} 
      redirectUri={window.location.origin}
      audience='https://beautify-api'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>  
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



