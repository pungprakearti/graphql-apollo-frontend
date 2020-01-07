import React, { Component } from 'react'
import { gql } from 'apollo-boost'

const getPostsContent = gql`
{
  posts {
    postContent
  }
}
`

export default class GraphQLTest extends Component {
  constructor(props) {
    super(props)
    this.state = { postContent: '' }

    //fetch graphql query response
    const {client} = this.props
    client.query({
      query: getPostsContent
    }).then(res => {
      this.setState({ postContent: res.data.posts[0].postContent })
    })
  }

  render() {
    const { postContent } = this.state

    return (
      <div dangerouslySetInnerHTML={{__html: postContent}} />
    )
  }
}
