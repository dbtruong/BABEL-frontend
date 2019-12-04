import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Logo from '../../../Assets/Images/logo.png'
import '../../../Assets/Css/LoginPage.css';

class LoginPage extends Component{
    render(){
        return(
            <div className="container">
                <Link to={'/'}><img src={Logo} alt="logo esope" className="imgLogo"/></Link><br/>
                <label>Pseudo :</label><br/>
                <input type="text" placeholder="Entrez votre pseudo"></input><br/>
                <br/>
                <label>Mot de passe :</label><br/>
                <input type="password" placeholder="Entrez votre mot de passe"></input><br/><br/>
                <Button className="button">Connexion</Button>
            </div>

        );
    }

}

export default LoginPage;