import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Test from './Test';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Test client={client}/>
      </div>
    </ApolloProvider>
  );
}

export default App;
