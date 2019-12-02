import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render(){
    return(
      <div className="Home">Our BABEL app is working!
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/newpage'} className="nav-link">Nouvelle page</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
      </div>
    );
  }
};

export default HomePage;

