import React from 'react'
import Layout from './layout'
import { Header, Container, Image, Grid, Segment, Divider } from 'semantic-ui-react'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'

const About = () => (
  <Layout>
    <div className="section even">
      <Header size="huge" textAlign="center" className="even">
        About Us
      </Header>
    </div>
    <Container className="section">
      <p>
        Have you been looking for a chiropractor in Roseville? Unlike conventional medicine, which focuses on attempting to treat disease once it occurs, the chiropractic care offered at ChiroFit Roseville in Roseville emphasizes the importance of improving your health in an
        effort to reduce the risk of pain and illness in the first place. Given the option, most people would prefer to be healthy and avoid illness if possible, and chiropractic care can help those people achieve their health and wellness goals. For those patients who may
        already be in pain, chiropractic care offers a unique way to provide pain relief for many types of pain and conditions, including back pain, neck pain and more! Pain relief and pain prevention are two of the reasons that chiropractic services have become so popular, both
        here in Roseville and around the world.
      </p>
    </Container>
    <Container className="section">
      <p>
        If you have been suffering from back pain in Roseville, don’t wait another second to begin your road to recovery! At ChiroFit Roseville, our chiropractic techniques can assist patients with the rediscovery of health and wellness that had been previously known but long
        lost. For others, the chiropractic journey may offer a new sense of balance and wellness that one has never before experienced. If you want to start living every day pain free, call us at (916) 783-2348 to schedule an appointment!
      </p>
    </Container>
    <Container className="section">
      <p>
        People around the world are recognizing the benefit of seeking an alternative to traditional medicine; one that will help them achieve and maintain optimal health without requiring invasive treatments such as surgery. Please take the time to meet the chiropractor and our
        network of chiropractic and wellness care professionals dedicated to helping you achieve your wellness objectives. To fully understand the nature of your health, we recommend that you join our free website membership program. As a patient at ChiroFit Roseville we will
        personally tailor a chiropractic and wellness program specifically targeted to your needs using the least invasive yet highly-effective techniques and services.
      </p>
    </Container>

    <Container>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Image src={room1} />
            </Grid.Column>

            <Grid.Column>
              <Image src={room2} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  </Layout>
)

export default About
