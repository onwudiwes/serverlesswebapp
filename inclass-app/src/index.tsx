import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';

Amplify.configure({

  Auth:{
    Cognito:{
      userPoolId:"us-east-1_NGG4oOk01",
      userPoolClientId:"5nt3ur9ipbuvtkh9uedih83gjj",
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
