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
        this.state.childId = localStorage.getItem("idChild"); 
       
    }

    async handleClick(e){
        let childId = localStorage.getItem("idChild");
        let userId = localStorage.getItem("sessionId");  
        let date = null; 
        console.log(childId); 
        console.log(userId); 
        this.state.comments = document.getElementById('comments').value; 
        let mandatId = await this.api.sendMandate(childId, this.state.instigator,this.state.comments,date);
         
        let gameSessionId =  await this.api.createGame(childId,userId,mandatId);
         

        localStorage.setItem("mandatId",mandatId); 
        localStorage.setItem("gameSessionId",gameSessionId); 
    }

  render() {
    return (
        <nav>
            <div class="container">
                <h1>Mandat</h1>
                <br/>
                <h3 class="childid">Id de l'enfant : {this.state.childId}</h3>
                <br/>
                <label><h3>Instigateur :</h3></label><br/>
                <input 
                    type="text"
                    name="instigator"
                    placeholder="Entrez votre nom"
                    value = {this.state.login}
                    onChange={e => this.setState({instigator: e.target.value})}>
                </input><br/>
                <br/>
                <label><h3>Demande :</h3></label><br/>
                <textarea id="comments" rows="5" cols="40">
                </textarea><br/><br/>
                <Link to={'/waiting'} className="nav-link"><button 
                    className="button_mandat"
                    onClick={this.handleClick}>
                    Envoyer Mandat
                </button></Link><br/><br/>
                <Link to={'/commentary'}><button name="Continue" className="button_mandat" onClick={this.handleClick4}>Continuer dernière partie</button></Link>
                <Link to={'/summary'}><button name="Summary" className="button_mandat" >Voir les résumés</button></Link>
                <br></br>
           </div>
        </nav>
    );
  }
}

export default MandatePage;