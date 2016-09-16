import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header = ({loading}) => {
  return (


    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
    <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    <span className="sr-only">Toggle navigation</span>
  <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
    <a className="navbar-brand" href="#">Transylvanian Menu</a>
  </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
    <li>
      <Link to="/#about" activeClassName="active">About</Link>
    </li>
    <li>
      <Link to="/#services" activeClassName="active">Services</Link>
    </li>
    <li>
      <Link to="/#contact" activeClassName="active">Contact</Link>
    </li>
      <li>
        <Link to="/makeyourowntour" activeClassName="active">Make your own tour</Link>
      </li>
    </ul>
    </div>
  </div>
  </nav>
  );
};
Header.propTypes = {
  loading:React.PropTypes.bool.isRequired
};
export default Header;
// activeclassNameName: style the link if its already pressed..you're on that page
