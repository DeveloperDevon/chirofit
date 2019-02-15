import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Header, Segment, Container } from 'semantic-ui-react'

const BlogPage = ({ data }) => (
  <Layout>
    <div className="section even">
      <Header size="huge" textAlign="center" className="even">
        Blog
      </Header>
    </div>
    <Container className="section" textAlign="center">
      {data.allMarkdownRemark.edges.map(post => (
        <Segment key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
        </Segment>
      ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
