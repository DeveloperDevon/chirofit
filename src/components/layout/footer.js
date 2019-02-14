import React from 'react'
import { Link } from 'gatsby'
import { List, Icon } from 'semantic-ui-react'

const Footer = () => (
  <div className="footer">
    <List horizontal divided>
      <List.Item>
        <a href="https://www.facebook.com/chirofitroseville">
          <Icon color="blue" name="facebook f" />
        </a>
      </List.Item>
      <List.Item>
        <a href="https://www.yelp.com/biz/chirofit-roseville-roseville">
          <Icon color="blue" name="yelp" />
        </a>
      </List.Item>
    </List>
    <br />
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
  </div>
)

export default Footer
