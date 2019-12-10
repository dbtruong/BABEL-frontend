import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MandateAPI from '../../../API/MandateAPI.js'
import '../../../Assets/Css/MandatePage.css';

class MandatePage extends Component {

    constructor(){
        super();
        this.state = {
            instigator : 0,
            childId : 0,
            comments : ""

        }
        this.api = new MandateAPI();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let childid = localStorage.getItem("chilId"); 
        let date = Date.now(); 
        this.state.comments = document.getElementById('comments').value; 
        this.api.sendMandate(childid, this.state.instigator,this.state.comments,date); 
    }

  render() {
    return (
        <nav>
            
            <div class="container">
                <h3>Mandat</h3>
                <label>Instigateur :</label><br/>
                <input 
                    type="text"
                    name="instigator"
                    placeholder="Entrez votre nom"
                    value = {this.state.login}
                    onChange={e => this.setState({instigator: e.target.value})}>
                </input><br/>
                <br/>
                <label>Demande :</label><br/>
                <textarea id="comments" rows="5" cols="40">
                </textarea><br/><br/>
                <Link to={'/commentary'} className="nav-link"><button 
                    className="button_mandat"
                    onClick={this.handleClick}>
                    Envoyer Mandat
                </button></Link><br/><br/>
           </div>
        </nav>
    );
  }
}

export default MandatePage;