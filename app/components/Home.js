var React = require('react');

class Home extends React.Component {
  render() {
    return(
      <div className='home-container'>
        <div className="grid">
          <h1 id="header" className="t-stroke t-shadow">
            HOWDY
          </h1>

      </div>
      <div className='name-container'>
        <h1>*Name*</h1>
        <h2>*Profession*</h2>
        <h3>*Location*</h3>
      </div>
    </div>
    )
  }
}

module.exports = Home;
