import React from 'react'
import Layout from '../components/layout'
import { Header, Container, Segment } from 'semantic-ui-react'
import MapContainer from './map'
import ContactForm from './ContactForm'

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
        <ContactForm />
      </Segment>
    </Container>
    <Container>
      <MapContainer id="map-container" />
    </Container>
  </Layout>
)

export default Contact
