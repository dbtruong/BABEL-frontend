import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../../../Assets/Css/startPage.css';

import Logo from '../../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';

class StartPage extends Component {
  render() {
    return (

        <nav className="container2">
            <Link to={'/'}><img src={Logo} alt="logo esope" className="Logo"/></Link><br/>
            <Button className="roundButton">C'est parti !!</Button>
        </nav>
    );
  }
}

export default StartPage;