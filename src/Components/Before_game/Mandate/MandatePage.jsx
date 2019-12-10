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

    async handleClick(e){
        let childid = localStorage.getItem("idChild"); 
        let date = null; 
        
        this.state.comments = document.getElementById('comments').value; 
        let mandatID = await this.api.sendMandate(childid, this.state.instigator,this.state.comments,date);
        console.log(mandatID); 
        localStorage.setItem("mandatId",mandatID); 
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
                <Link to={'/settings'} className="nav-link"><button 
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