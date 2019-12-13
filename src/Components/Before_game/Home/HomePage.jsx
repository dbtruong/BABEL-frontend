import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/HomePage.css';


class HomePage extends Component {
  
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    localStorage.setItem('role', e.target.name);
  }

  render(){
    return(
      <nav className="container">
          <br/><br/><br/><br/><br/><br/>
           <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
          <div> 
          <Link to={'/childConnexion'} className="nav-link"><button name="child" className="child_button" onClick={this.handleClick}>Enfant</button></Link>
          </div>
          <br/>
          <div>
          <Link to={'/login'} className="nav-link"><button name="parent" className="parent_button" onClick={this.handleClick}>Parent</button></Link>
          </div> 
          <br/>
          <div>
          <Link to={'/login'} className="nav-link"><button name="pro" className="pro_button" onClick={this.handleClick}>Professionel</button></Link>
          </div>
      
      </nav>    
      
     
    );
  }
};

export default HomePage;

