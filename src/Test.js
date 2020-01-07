import React, { Component } from 'react'
import { gql } from 'apollo-boost'

const getPostsContent = gql`
{
  posts {
    postContent
  }
}
`

// class Test extends Component {
export default class Test extends Component {
  constructor(props) {
    super(props)
    const {client} = this.props

    this.postContent = ''

    client.query({
      query: getPostsContent
    }).then(res => {
      console.log(res.data.posts[0].postContent)
      this.postContent = res.data.posts[0].postContent
    })
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.postContent}}>
      </div>
    )
  }
}

// export default graphql(getPostsContent)(Test)
