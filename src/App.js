import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import GraphQLTest from './GraphQLTest';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',

  //This removes __typename from the schema to fix __typename bug
  cache: new InMemoryCache({
    addTypename: false
  })
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <GraphQLTest client={client}/>
      </div>
    </ApolloProvider>
  );
}

export default App;
