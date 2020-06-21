import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const API_URL = "https://work-with-rin-api.herokuapp.com/api/";

const client = new ApolloClient({ uri: API_URL });

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);