import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../../../Assets/Css/startPage.css';

import { Link } from 'react-router-dom';

class WaitingPage extends Component {
  render() {
    return (

        <nav className="container2">
            <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
            <Link to={'/settings'}><Button className="roundButton">En attente de l'enfant</Button></Link>
        </nav>
    );
  }
}

export default WaitingPage;