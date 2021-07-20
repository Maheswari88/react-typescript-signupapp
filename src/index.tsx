import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
//import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://practice-gi2.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'td0pqad0hOnILoAzhnE1Niqlq5tMXmDsXVMJga8R0YaEeutZo9WYuzbhfneOK90S'
  },
  cache: new InMemoryCache()
});

ReactDOM.render(

    <ApolloProvider client={client} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ApolloProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
