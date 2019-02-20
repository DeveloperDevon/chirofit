import React from 'react'

const ContactForm = () => {
  return (
    <form className="ui form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input control="input" type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter Name..." />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Enter Email..." />
      </div>
      <div className="field">
        <label>Phone Number</label>
        <input type="text" name="phone" placeholder="Enter Phone Number..." />
      </div>
      <div className="field">
        <label>Message (Optional)</label>
        <textarea type="text" name="message" placeholder="Enter Optional Message..." />
      </div>
      <div className="field centered">
        <button className="ui primary fluid button" type="submit">
          Send Email
        </button>
      </div>
    </form>
  )
}

export default ContactForm
