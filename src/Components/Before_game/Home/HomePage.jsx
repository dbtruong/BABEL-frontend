import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/HomePage.css';
import Logo from '../../../Assets/Images/logo.png'


class HomePage extends Component {
  render(){
    return(
      <nav className="container">
         
           <Link to={'/'}><img src={Logo} alt="logo esope" className="Logo"/></Link><br/>
          <div> 
            <button className="child_button"><Link to={'/childConnexion'} className="nav-link">Enfant</Link></button>
          </div>
          <br/>
          <div>
            <button className="pro_button"><Link to={'/login'} className="nav-link">Professionel</Link></button>
          </div> 
          <br/>
          <div>
            <button className="parent_button"><Link to={'/login'} className="nav-link">Parent</Link></button>
          </div>
      
      </nav>    
      
     
    );
  }
};

export default HomePage;

