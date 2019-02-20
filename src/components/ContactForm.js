import React from 'react'
import { Segment, Form, Grid, Button } from 'semantic-ui-react'

const ContactForm = () => {
  return (
    <Segment>
      <form name= "contact2" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input name= "name" placeholder="Your Name"type="text"/>
      <button>Send</button>
      </form>
      <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

        <Form.Input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <Form.Group widths="equal">
          <Form.Input name="first-name" fluid label="First name" placeholder="First name" />
          <Form.Input name="last-name" fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input name="email" fluid label="Email address" placeholder="Email Address" />
          <Form.Input name="phone" fluid label="Phone number" placeholder="Phone number" />
        </Form.Group>
        <Form.Group inline />
        <Form.TextArea name="message" label="Message" placeholder="Tell us more about you..." />
        <Grid>
          <Grid.Column textAlign="center">
            <Button fluid primary >
              Send Email
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </Segment>
  )
}

export default ContactForm
