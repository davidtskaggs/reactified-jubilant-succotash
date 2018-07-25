var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/contact'>
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
