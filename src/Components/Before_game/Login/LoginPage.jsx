import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import LoginAPI from '../../../API/LoginAPI.js'

import '../../../Assets/Css/LoginPage.css';

class LoginPage extends Component{

    constructor(){
        super();
        this.state = {
            login : "",
            password : "",
            redirection : "/",
            message : ""
        }
        if (localStorage.getItem('role') === 'parent'){
            this.state.redirection = "/childSummary"
        } else {
            this.state.redirection = "/profChildChoice"
        }
        this.api = new LoginAPI();
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(){
        let res = await this.api.checkLogin(this.state.login, this.state.password);
        if (res.length){
            localStorage.setItem('sessionId', res[0].id)
            this.props.history.push(this.state.redirection)
        } else {
            this.setState({message : "Identifiants incorrects"})
        }
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
                </Button><br/><br/>
                <p className="wrongCredentials">{this.state.message}</p>
            </div>

        );
    }
}

export default LoginPage;