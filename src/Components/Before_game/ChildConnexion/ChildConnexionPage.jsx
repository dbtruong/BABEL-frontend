import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/ChildConnexionPage.css';
import Button from 'react-bootstrap/Button';

class ChildConnexionPage extends Component {
  render() {
    return (
        <nav className="container">
          <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
          <div>
          <label>Id de l'enfant:</label><br/>
                <input type="text" placeholder="Entrez l'id de l'enfant" className="input"></input><br/>
          </div>
          <br/>
          <Link to={'/childSummary'}><Button className="button">Connexion</Button></Link>
        </nav>
    );
  }
}

export default ChildConnexionPage;