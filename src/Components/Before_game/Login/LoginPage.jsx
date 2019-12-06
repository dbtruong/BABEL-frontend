import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import LoginAPI from '../../../API/LoginAPI.js'

import '../../../Assets/Css/LoginPage.css';

class LoginPage extends Component{

    constructor(){
        super();
        this.state = {
            login : "",
            password: ""
        }
        this.api = new LoginAPI();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // Uncomment to link with backend
        // this.api.checkLogin(this.state.login, this.state.password)
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //console.log(this.api.checkLogin(this.state.login, this.state.password));
        console.log(this.api.getTest());
    }

    render(){
        return(
            <div className="container">
                <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="imgLogo"/></Link><br/>
                <label>Pseudo :</label><br/>
                <input 
                    type="text"
                    name="user"
                    placeholder="Entrez votre pseudo"
                    value = {this.state.login}
                    onChange={e => this.setState({login : e.target.value})}>
                </input><br/>
                <br/>
                <label>Mot de passe :</label><br/>
                <input 
                    type="password"
                    name="pwd"
                    placeholder="Entrez votre mot de passe"
                    value = {this.state.password}
                    onChange={e => this.setState({password : e.target.value})}>
                </input><br/><br/>
                <Button 
                    className="button"
                    onClick={this.handleClick}>
                    Connexion
                </Button>
            </div>

        );
    }
}

export default LoginPage;