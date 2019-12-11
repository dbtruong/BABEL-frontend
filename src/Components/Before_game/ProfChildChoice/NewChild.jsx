import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class NewChild extends Component {
    render() {
        return (
            <nav className="container">
              <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
              <h4>Entrez les informations de l'enfant :</h4>
              
              <label>Prénom :</label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input><br/>
              
                <label>Nom :</label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input><br/>
                <label>Date De Naissance :</label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input><br/>
                <label>Handicap :</label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input><br/>
              <br/>
              <div>
                  <Link to={'/profChildChoice'}><Button className="button" class="btn btn-primary btn-lg">Retour</Button></Link>
                  <Link to={'/profChildChoice'}><Button className="button" class="btn btn-primary btn-lg">Valider</Button></Link>
              </div>
            </nav>
        );
      }
}

export default NewChild;