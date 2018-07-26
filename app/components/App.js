var React = require('react');
var About = require('./About');
var Contact = require('./Contact');
var Home = require('./Home');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Social = require('./Social');



class App extends React.Component {
  render() {
    return(
      <div>
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
        <Social />
      </div>
    )
  }
}

module.exports = App;
