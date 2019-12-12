import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/ChildConnexionPage.css';
import Button from 'react-bootstrap/Button';
import ChildConnectionAPI from '../../../API/ChildConnexionAPI.js'

class ChildConnexionPage extends Component {

  constructor(){
    super();
    this.state = {
      id : "",
      message: ""
    }
    this.api = new ChildConnectionAPI();
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(){
    let res = await this.api.getChildSession(this.state.id)
    console.log(res);
    if (res.length){
      localStorage.setItem('sessionId', res[0].id)
      localStorage.setItem('childName', JSON.stringify({"name" : res[0].name}))
      this.props.history.push('/childSummary')
    } else {
        this.setState({message : "Identifiant inexistant"})
    }
  }

  render() {
    return (
        <nav className="container">
          <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
          <div>
          <label>Id de l'enfant:</label><br/>
                <input 
                  type="text" 
                  placeholder="Entrez l'id de l'enfant" 
                  className="input"
                  value = {this.state.id}
                  onChange={e => this.setState({id : e.target.value})}>
                </input><br/>
          </div>
          <br/>
          <Button className="button" onClick={this.handleClick}>Connexion</Button><br/><br/>
          <p className="wrongCredentials">{this.state.message}</p>
        </nav>
    );
  }
}

export default ChildConnexionPage;