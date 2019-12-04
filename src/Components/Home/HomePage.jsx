import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/HomePage.css';

class HomePage extends Component {
  render(){
    return(
      <div className="Home">Our BABEL app is working fine!
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
           <button><Link to={'/before_game/'} className="nav-link">Enfant</Link></button>
           <button><Link to={'/login'} className="nav-link">Professionel</Link></button>
           <button><Link to={'/login'} className="nav-link">Parent</Link></button>
          
      </nav>
      </div>
    );
  }
};

export default HomePage;

