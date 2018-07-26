var React = require('react');

class Home extends React.Component {
  render() {
    return(
      // <div className='home-container'>
      // </div>
      <div className='name-container'>
        <h1>*Name*</h1>
        <h2>*Profession*</h2>
        <h3>*Location*</h3>
      </div>
    )
  }
}

module.exports = Home;
