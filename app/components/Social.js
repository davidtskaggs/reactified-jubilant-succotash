var React = require('react');
import Linkedin from 'react-icons/lib/fa/linkedin';
import Insta from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter';
import Fb from 'react-icons/lib/fa/facebook';

class Social extends React.Component {
  render() {
    return (
      <div className='social'>
        <h1 className="social-header">The Socials</h1>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/skaggsd/"><h1 className="icon"><Linkedin /></h1></a>
          <a href="#"><h1 className="icon"><Insta /></h1></a>
          <a href="#"><h1 className="icon"><Twitter /></h1></a>
          <a href="#"><h1 className="icon"><Fb /></h1></a>
        </div>
      </div>
    )
  }
}

module.exports = Social;
