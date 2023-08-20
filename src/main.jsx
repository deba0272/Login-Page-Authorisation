import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-4cppcr7nqjmh614n.us.auth0.com"
    clientId="BOgEdQmySVExJtrZAlLth4Rqx5t5k2Oc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
 >
  {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
     </Auth0Provider>
     
     </React.StrictMode>
 
)
