import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import GlobalContext from './ContextApi/globalState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-21wigdhh6snxx87i.us.auth0.com"
    clientId="SspvqgOkPYgp6y1R5b6Sge5bJnilO3Nu"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <GlobalContext>
      <App />
    </GlobalContext>
  </Auth0Provider>
);


