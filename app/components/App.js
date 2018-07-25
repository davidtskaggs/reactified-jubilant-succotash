var React = require('react');
var About = require('./About');
var Contact = require('./Contact');
var Home = require('./Home');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

module.exports = App;
