import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/ChildConnexionPage.css';
import Button from 'react-bootstrap/Button';
import ChildConnectionAPI from '../../../API/ChildConnexionAPI.js'

class ChildConnexionPage extends Component {

  constructor(){
    super();
    this.state = {
      id : ""
    }
    this.api = new ChildConnectionAPI();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    localStorage.setItem("childId",this.state.id); 
    // Uncomment to link with backend
    // this.api.getChildSession(this.state.id)
    //     .then(res => {
    //         console.log(res.data);
    //     })
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
          <Link to={'/childSummary'}><Button className="button" onClick={this.handleClick}>Connexion</Button></Link>
        </nav>
    );
  }
}

export default ChildConnexionPage;