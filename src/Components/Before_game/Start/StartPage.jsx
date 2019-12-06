import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../../../Assets/Css/startPage.css';

import { Link } from 'react-router-dom';

class StartPage extends Component {
  render() {
    return (

        <nav className="container2">
            <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
            <Link to={'/choiceLike'}><Button className="roundButton">C'est parti !!</Button></Link>
        </nav>
    );
  }
}

export default StartPage;