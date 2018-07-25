var React = require('react');

class Contact extends React.Component {
  render() {
    return(
      <div className='home-container'>
        <h1>
          Contact
        </h1>
        <form action="https://formspree.io/davidtskaggs@gmail.com" method="POST">
        <div>
          <input className="input" type="text" name="name" id="name" placeholder=" Full Name" />
        </div>
        <div>
          <input type="text" className="input" name="telephone" id="telephone" placeholder=" Telephone" />
        </div>
        <div>
          <input type="email" className="input" name="_replyto" id="email" placeholder=" Email" />
        </div>
        <div>
          <input type="text" className="input" name="subject" id="subject" placeholder=" Subject" />
        </div>
        <div>
          <textarea type="text" id="text-area" className="input" rows="5" name="message" placeholder=" Message">
          </textarea>
        </div>
        <button type="submit" value="Send" className="button btn-block">Submit</button>
      </form>
    </div>
    )
  }
}

module.exports = Contact;
