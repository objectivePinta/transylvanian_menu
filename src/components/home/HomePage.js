import React,{Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header className="header-image">
          <div className="headline">
            <div className="container">
              <h1>Brasov by Foot</h1>
              <h2>Wonder and adventure</h2>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="featurette-divider"/>
          <div className="featurette" id="about">
            <img className="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500"/>
            <h2 className="featurette-heading">This First Heading
              <span className="text-muted">Will Catch Your Eye</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
              semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.</p>
          </div>

          <hr className="featurette-divider"/>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="featurette" id="services">
            <img className="featurette-image img-circle img-responsive pull-left" src="http://placehold.it/500x500"/>
            <h2 className="featurette-heading">The Second Heading
              <span className="text-muted">Is Pretty Cool Too.</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
              semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.</p>
          </div>

          <hr className="featurette-divider"/>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="featurette" id="contact">
            <img className="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500"/>
            <h2 className="featurette-heading">The Third Heading
              <span className="text-muted">Will Seal the Deal.</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
              semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.</p>
          </div>

          <hr className="featurette-divider"/>

          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright &copy; Your Website 2014</p>
              </div>
            </div>
          </footer>

        </div>

      </div>
    );
  }
}

export default HomePage; //when someone imports the file...it gets a reference to the HomePage className, because I exported it
