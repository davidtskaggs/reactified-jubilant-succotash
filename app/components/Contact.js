var React = require('react');

class Contact extends React.Component {
  render() {
    return(
      <div className='home-container'>
        <div className="grid">
          <h1 id="header" className="t-stroke t-shadow--halftone">
            HELLO
          </h1>
        </div>
        <div className="contact-form">
        <form action="https://formspree.io/davidtskaggs@gmail.com" method="POST">
        <input className="input" type="text" name="name" id="name" placeholder=" Full Name" />

          <input type="text" className="input" name="telephone" id="telephone" placeholder=" Telephone" />

          <input type="email" className="input" name="_replyto" id="email" placeholder=" Email" />
          <input type="text" className="input" name="subject" id="subject" placeholder=" Subject" />
          <textarea type="text" id="text-area" className="input" rows="5" name="message" placeholder=" Message">
          </textarea>
        <button type="submit" value="Send" className="button btn-block">Submit</button>
      </form>
    </div>
    </div>
    )
  }
}

module.exports = Contact;
