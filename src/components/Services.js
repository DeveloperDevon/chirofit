import React from 'react'
import Layout from '../components/layout'
import { Container, Header, Segment } from 'semantic-ui-react'

const Services = () => (
  <Layout>
    <div className="section even">
      <Header size="huge" textAlign="center" className="even">
        Services and Techniques
      </Header>
    </div>

    <Segment>
      <Container className="section">
        <Header size="large">Chiropractic Adjusting Techniques</Header>
        <p>At ChiroFit Roseville we use a combination of Adjusting techniques. Manual adjustments are performed by hand, with the doctor applying a gentle force or thrust to help reestablish proper joint motion and alignment.</p>
        <p>Another technique we use is the Activator adjusting tool, which is a spring loaded impulse adjusting tool. This is a lower force technique that may be beneficial for certain individuals and there is no audible “popping sound.”</p>
        <p>
          We also utilize the Drop Table adjusting technique as well as The SOT Blocks/Wedges that gently help shift and realign the hips and pelvis. We adjust and treat a variety of Musculoskeletal conditions including back and neck pain, headaches, upper extremity conditions
          (i.e. shoulder, elbow and wrist), lower extremity (i.e. hip, knee and ankle) and TMJ too!
        </p>
      </Container>
    </Segment>

    <Segment>
      <Container className="section">
        <Header size="large">Physiotherapy</Header>
        <p>We also utilize physiotherapy modalities to complement the adjusting and help speed pain relief and tissue healing. These include Electrical Muscle Stimulation and Therapeutic Ultrasound</p>
        <p>
          <strong>Electrical Muscle Stimulation</strong> helps decrease pain and reduces muscle spasm or tightness. It helps tight and knotted up muscles relax, and may help the adjustment go easier due to decreased muscle tightness to have to work through.
        </p>
        <p>
          <strong>Ultrasound Therapy</strong> is very beneficial for reducing acute swelling from a new injury or chronic inflammation from past injuries. Gentle Ultrasound waves penetrate the different levels of soft tissue and help disperse any swelling, inflammation or edema.
          This therapy is very relaxing and feels like a warm massage to the area being treated.
        </p>
      </Container>
    </Segment>

    <Segment>
      <Container className="section">
        <Header size="large">Myofascial Release</Header>
        <p>
          Myofascial Release is one of the most effective forms of treatment for Soft Tissue injuries and Cumulative Trauma Disorder (CTD). It is a hands on technique than can be described as the combination of stretching and massage. The term “soft tissue” refers to the muscles,
          tendons, fascia and nerves.
        </p>
      </Container>
    </Segment>

    <Segment>
      <Container className="section">
        <Header size="large">Therapeutic Exercise</Header>
        <p>We also prescribe and teach our patients how to do at home stretching and strengthening exercises to help facilitate the healing process and prevent future injuries from occurring.</p>
      </Container>
    </Segment>

    <Segment>
      <Container className="section">
        <Header size="large" textAlign="center">
          Call us today to schedule a consultation with one of our qualified Doctors to see if our brand of Chiropractic can benefit you!
        </Header>
      </Container>
    </Segment>
  </Layout>
)

export default Services
