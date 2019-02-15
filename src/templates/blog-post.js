import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Header, Segment, Container, Button, Icon } from 'semantic-ui-react'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="section even">
        <Header size="huge" textAlign="center" className="even">
          Blog
        </Header>
      </div>
      <Container className="section">
        <Segment.Group>
          <Segment>
            <Link to="/blog">
              <Button primary icon labelPosition="left" size="mini">
                <Icon name="left arrow" />
                All Blogs
              </Button>
            </Link>
            <Header size="large" textAlign="center">
              Posted by {post.frontmatter.author} on {post.frontmatter.date}
            </Header>
          </Segment>
          <Segment>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Segment>
        </Segment.Group>
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
