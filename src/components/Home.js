import React from 'react'
import { Image, Container, Segment, Header, Grid, Icon, Card, Button, Responsive } from 'semantic-ui-react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import SEO from '../components/seo'
import josh from '../images/josh.png'
import jon from '../images/jon.png'
import ContactForm from './ContactForm'

const Home = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="section even">
      <Container>
        <Header size="huge" textAlign="center" className="even">
          Welcome to ChiroFit Roseville
        </Header>
        <Header size="large" textAlign="center" className="even">
          Your Roseville Chiropractors
        </Header>
        <Container textAlign="justified">
          Dr. Josh Reichardt and Dr. Jon McHale both grew up in the Roseville/Sacramento area. Both attended Sierra College in Rocklin and were classmates at Life Chiropractic College West in Hayward, CA. For two years following graduation, Dr. Reichardt and Dr. McHale have
          gained valuable experience and learned cutting edge techniques through school, and their year long internship in the Life West Health Center and from working alongside top Chiropractors for the past two years.
        </Container>
      </Container>
    </div>
    {/* <div>
      <Image className="showcase" src="http://chirofitroseville.com/wp-content/uploads/2014/05/new_banner.jpg" />
    </div> */}
    <div className="section odd">
      <Container>
        <Header size="large" textAlign="center">
          What Makes Us Different?
        </Header>

        <Grid columns={3} textAlign="center">
          <Grid.Column>
            <Icon name="heart" size="massive" style={{ color: '#2EA3F2' }} />
            <h3>Your well-being is our priority</h3>
            <p> At your first visit to ChiroFit Roseville, Dr. Reichardt or Dr. McHale will explain how chiropractic care works and give you a full evaluation to see if our chiropractic solutions fit your needs.</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="doctor" size="massive" style={{ color: '#2EA3F2' }} />
            <h3>Experienced Doctors</h3>
            <p> Dr. Reichardt worked and learned from Chiropractors in Lafayette with over 35 years experience and Dr. McHale worked with another Chiropractor in Roseville with over 30 years experience as well.</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="help" size="massive" style={{ color: '#2EA3F2' }} />
            <h3>Passion to Help People</h3>
            <p> Their passion to help people feel better and reach their maximum potential lead them to team up and start ChiroFit Roseville, where they can now help members of the community they grew up in. </p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>

    <div className="section even">
      <Container textAlign="center">
        <Header size="large" textAlign="center" className="even">
          What Our Clients Think
        </Header>
        <h4>Dont just take our word for it, here are a couple of testimonials that our satisfied clients have said about Chirofit Roseville:</h4>
        <Grid columns={2} textAlign="justified">
          <Grid.Column>
            <Card centered fluid>
              <Card.Content>
                <Card.Description>
                  "After injuring my low back while on vacation and a very long flight home, I was hurting pretty badly. Options for appointments were limited as it was 12/23, most businesses were closed. My usual chiropractor was out of town so I contacted Dr. Reichardt on his
                  cell and he kindly cut his Christmas shopping short to see me same day. I’ve been very pleased with the results, immediate improvement and after a few visits has held up nicely."
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="right">
                Tanya E
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered fluid>
              <Card.Content>
                <Card.Description>
                  "I continue to see Dr. Reichardt as needed for maintenance adjustments as my issue is chronic with flare-ups from workouts. He’s very thorough, knowledgeable, conscience and attentive. I appreciate that he’s consistently on time for my appointments, never feel
                  rushed, always asks about new issues, how last adjustment held out, etc. In addition, he works hard to coordinate with my insurance which is a challenge. Without question, I recommend Dr. Reichardt especially for those who are athletes or fitness minded."
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="right">
                Jessica W
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>

    <div className="section selfies" style={{ paddingBottom: 0 }}>
      <Grid columns={3}>
        <Responsive as={Grid.Column} {...Responsive.onlyComputer}>
          <Image className="selfie" src={josh} />
        </Responsive>
        <Responsive as={Grid.Column} {...Responsive.onlyComputer}>
          <Container textAlign="center" className="section">
            <Header size="large">Our Promise To You</Header>
            <Container>
              Unlike conventional medicine, which focuses on attempting to treat disease once it occurs, the chiropractic care offered at ChiroFit Roseville in Roseville emphasizes the importance of improving your health in an effort to reduce the risk of pain and illness in the
              first place. Given the option, most people would prefer to be healthy and avoid illness if possible, and chiropractic care can help those people achieve their health and wellness goals.
            </Container>
            <Button basic color="blue" style={{ marginTop: 25 }}>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </Container>
        </Responsive>
        <Responsive as={Grid.Column} {...Responsive.onlyComputer}>
          <Image className="selfie" src={jon} />
        </Responsive>
      </Grid>
    </div>

    <div className="section selfies" style={{ paddingBottom: 0 }}>
      <Grid columns={2}>
        <Responsive as={Grid.Column} {...Responsive.onlyMobile}>
          <Image className="selfie" src={josh} />
        </Responsive>
        <Responsive as={Grid.Column} {...Responsive.onlyMobile}>
          <Image className="selfie" src={jon} />
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyMobile}>
          <Container textAlign="center" className="section">
            <Header size="large">Our Promise To You</Header>
            <Container>
              Unlike conventional medicine, which focuses on attempting to treat disease once it occurs, the chiropractic care offered at ChiroFit Roseville in Roseville emphasizes the importance of improving your health in an effort to reduce the risk of pain and illness in the
              first place. Given the option, most people would prefer to be healthy and avoid illness if possible, and chiropractic care can help those people achieve their health and wellness goals.
            </Container>
            <Button basic color="blue" style={{ marginTop: 25 }}>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </Container>
        </Responsive>
      </Grid>
    </div>

    <div className="section selfies" style={{ paddingBottom: 0 }}>
      <Grid columns={2}>
        <Responsive as={Grid.Column} {...Responsive.onlyTablet}>
          <Image className="selfie" src={josh} />
        </Responsive>
        <Responsive as={Grid.Column} {...Responsive.onlyTablet}>
          <Image className="selfie" src={jon} />
        </Responsive>
        <Responsive as={Container} {...Responsive.onlyTablet}>
          <Container textAlign="center" className="section">
            <Header size="large">Our Promise To You</Header>
            <Container>
              Unlike conventional medicine, which focuses on attempting to treat disease once it occurs, the chiropractic care offered at ChiroFit Roseville in Roseville emphasizes the importance of improving your health in an effort to reduce the risk of pain and illness in the
              first place. Given the option, most people would prefer to be healthy and avoid illness if possible, and chiropractic care can help those people achieve their health and wellness goals.
            </Container>
            <Button basic color="blue" style={{ marginTop: 25 }}>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </Container>
        </Responsive>
      </Grid>
    </div>

    <Container className="section">
      <Segment>
        <Header size="large" textAlign="center">
          Ready to get Started?
        </Header>
      </Segment>
      <Segment>
        <ContactForm />
      </Segment>
    </Container>
  </Layout>
)

export default Home
