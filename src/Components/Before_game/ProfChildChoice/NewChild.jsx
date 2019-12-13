import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class NewChild extends Component {
    render() {
        return (
            <nav className="container">
                <br/><br/>
              <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
              <h4>Entrez les informations de l'enfant :</h4>
              <br/>
              <label><h4>Prénom :</h4></label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input>
                <br/><br/>
              <label><h4>Nom :</h4></label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input>
                <br/><br/>
                <label><h4>Date De Naissance :</h4></label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input>
                <br/><br/>
                <label><h4>Handicap :</h4></label><br/>
                <input
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo">
                </input>
                <br/>
              <br/><br/>
              <div>
                  <Link to={'/profChildChoice'}><Button className="button" class="btn btn-primary btn-lg">Retour</Button></Link>
                  <Link to={'/profChildChoice'}><Button className="button" class="btn btn-primary btn-lg">Valider</Button></Link>
              </div>
            </nav>
        );
      }
}

export default NewChild;