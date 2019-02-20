import React from 'react'
import { Link } from 'gatsby'
import { Image, List, Container, Segment } from 'semantic-ui-react'

const Header = () => (
  <div className="sticky-header">
    <Container>
      <Segment.Group horizontal className="header">
        <Segment className="header-links">
          <List horizontal divided>
            <List.Item>
              <Link to="/">Home</Link>
            </List.Item>
            <List.Item>
              <Link to="/services">Services & Techniques</Link>
            </List.Item>
            <List.Item>
              <Link to="/blog">Blog</Link>
            </List.Item>
            <List.Item>
              <Link to="/contact">Contact</Link>
            </List.Item>
            <List.Item>
              <Link to="/about">About</Link>
            </List.Item>
          </List>
        </Segment>
        <Segment>
          <Link to="/">
            <Image floated="right" src="https://chirofitroseville.com/wp-content/uploads/2014/05/new_logo.png" size="small" />
          </Link>
        </Segment>
      </Segment.Group>
    </Container>
  </div>
)

export default Header
