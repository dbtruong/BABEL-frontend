import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/HomePage.css';

class HomePage extends Component {
  render(){
    return(
      <div className="Home">Our BABEL app is working fine!
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/newpage'} className="nav-link">Nouvelle page</Link></li>
          </ul>
          </nav>
=======
          
           <button><Link to={'/before_game/'} className="nav-link">Enfant</Link></button>
           <button><Link to={'/before_game/'} className="nav-link">Professionel</Link></button>
           <button><Link to={'/before_game/'} className="nav-link">Parent</Link></button>
          
      </nav>
>>>>>>> 3bed10d512c83913c77c9354c07fb82ee47166a6
      </div>
    );
  }
};

export default HomePage;

