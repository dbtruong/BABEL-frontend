import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Images/logo.png'; 
import '../../../Assets/Css/ChildConnexionPage.css';
import Button from 'react-bootstrap/Button';

class ChildConnexionPage extends Component {
  render() {
    return (
        <nav className="container">
          <Link to={'/'}><img src={Logo} alt="logo esope" className="Logo"/></Link><br/>
          <div>
          <label>Id de l'enfant:</label><br/>
                <input type="text" placeholder="Entrez l'id de l'enfant" className="input"></input><br/>
          </div>
          <br/>
          <Link to={'/start'}><Button className="button">Connexion</Button></Link>
        </nav>
    );
  }
}

export default ChildConnexionPage;