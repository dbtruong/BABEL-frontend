import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/HomePage.css';

class HomePage extends Component {
  render(){
    return(
      <div className="Home">Our BABEL app is working fine!
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/newpage'} className="nav-link">Nouvelle page</Link></li>
          </ul>
          </nav>
      </div>
    );
  }
};

export default HomePage;

