import React, { Component } from 'react'
import { gql } from 'apollo-boost'
// import { graphql } from 'react-apollo'
// import { useQuery } from '@apollo/react-hooks'
import { Query } from 'react-apollo';

const getPostsContent = gql`
{
  post {
    postContent
  }
}
`

// class Test extends Component {
export default class Test extends Component {
  render() {
    return (
      <Query query={getPostsContent}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return data
        }}
      </Query>
    )
  }
}

// export default graphql(getPostsContent)(Test)
