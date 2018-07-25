var React = require('react');

class Contact extends React.Component {
  render() {
    return(
      <div className='home-container'>
        <h1>
          Contact
        </h1>
        <form action="https://formspree.io/davidtskaggs@gmail.com" method="POST">
                    <div class="form-group">
                        <input type="text" class="form-control input-lg" name="name" id="name" placeholder="Full Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control input-lg" name="telephone" id="telephone" placeholder="Telephone" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control input-lg" name="_replyto" id="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control input-lg" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control input-lg"  rows="5" name="message" id="message" placeholder="Message">
                        </textarea>
                    </div>
                    <button type="submit" value="Send" class="btn btn-block">Submit</button>
                </form>
      </div>
    )
  }
}

module.exports = Contact;
