import React from 'react'
import Layout from '../components/layout'
import { Header, Container, Segment, Grid, Form } from 'semantic-ui-react'
import MapContainer from './map'

const Contact = () => (
  <Layout>
    <div className="section even">
      <Header size="huge" textAlign="center" className="even">
        Contact Us
      </Header>
    </div>
    <Container style={{ margin: '25px 0 25px 0' }}>
      <Segment textAlign="center">
        <Header size="medium">Sign up using the form or call to schedule your appointment today</Header>
        <p>ChiroFit Roseville | (916) 783-2348 | 1050 Opportunity Dr # 150 | Roseville, CA 95678</p>
      </Segment>

      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Email address" placeholder="Email Address" />
            <Form.Input fluid label="Phone number" placeholder="Phone number" />
          </Form.Group>
          <Form.Group inline />
          <Form.TextArea label="Message" placeholder="Tell us more about you..." />
          <Grid>
            <Grid.Column textAlign="center">
              <Form.Button primary>Send Email</Form.Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </Container>
    <Container>
      <MapContainer id="map-container" />
    </Container>
  </Layout>
)

export default Contact
