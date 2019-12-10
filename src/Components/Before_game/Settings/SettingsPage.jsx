import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SettingsAPI from '../../../API/SettingsAPI.js'
import '../../../Assets/Css/SettingsPage.css';

class SettingsPage extends Component {
  
  constructor(){
        super();
        this.state = {
            currentCategory : "",
            stepOrder1 : 0,
            stepOrder2 : 0,
            stepOrder3 : 0,  
            categoryPriority : [],
            categories : [], 
            cntPrior: 0,
            cnt1 : 0,
            cnt1Bis : 0, 
            cnt2 : 0,
            cnt2Bis : 0, 
            cnt3 : 0,
            cnt3Bis : 0, 
            cnt4 : 0,
            cnt4Bis : 0, 
            cnt5 : 0,
            cnt5Bis : 0,  
            cnt6 : 0, 
            cnt6Bis : 0, 
            cnt7 : 0,
            cnt7Bis : 0 
            
        }
        this.api = new SettingsAPI();
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.sendToBackEnd = this.sendToBackEnd.bind(this);
        //this.category = this.api.loadCategories(id);  
        
  }
  async sendToBackEnd(categorietab){
    //let childId = localStorage.getItem("childId");
    //let userId = localStorage.getItem("sessionId"); 
    //let gameSessionId = localStorage.getItem("gameSessionId");
    //let mandatId = localStorage.getItem("mandatId); 
    let mandatId = 2; 
    let childId = 1; 
    let gameSessionId = 1; 
    let userId = 2; 
    let gameSession = await this.api.getGameSession(gameSessionId); 
    for(let i = 1; i <=this.state.categoryPriority.length; i++){
        this.api.updateCategory(gameSessionId, this.state.categoryPriority[i], i); 
    }
    this.api.setStep(gameSessionId,gameSession[0].start_date,gameSession[0].guardian_comment,gameSession[0].prof_comment,this.state.stepOrder1,this.state.stepOrder2,this.state.stepOrder3,gameSession[0].finished_state,gameSession[0].version,childId,userId,mandatId); 
    

}
  handleClick3(e){
    this.sendToBackEnd(this.state.categoryPriority);
  }
  handleClick(e){
    // 1 Love - Help - Happy
    // 2 Love - Happy - Help
    // 3 Help - Love - Happy
    // 4 Help - Happy - Help
    // 5 Happy - Love - Help
    // 6 Happy - Help - Love
     let stepOrder = e.target.name
     console.log(stepOrder); 
     let tab; 
     if(stepOrder==="1"){
        document.getElementsByName("1")[0].style.borderColor = 'red';
        this.state.stepOrder1= 1; 
        this.state.stepOrder2= 2;
        this.state.stepOrder3= 3;
        tab = ["2","3","4","5","6"]; 
     }
     if(stepOrder==="2"){
        document.getElementsByName("2")[0].style.borderColor = 'red';
        this.state.stepOrder1= 1;
        this.state.stepOrder2= 3;
        this.state.stepOrder3= 2;
        tab = ["1","3","4","5","6"]; 
     }
     if(stepOrder==="3"){
        document.getElementsByName("3")[0].style.borderColor = 'red';
        this.state.stepOrder1= 2;
        this.state.stepOrder2= 1;
        this.state.stepOrder3= 3;
        tab = ["1","2","4","5","6"]; 
     }
     if(stepOrder==="4"){
        document.getElementsByName("4")[0].style.borderColor = 'red';
        this.state.stepOrder1= 2;
        this.state.stepOrder2= 3;
        this.state.stepOrder3= 1;
        tab = ["1","2","3","5","6"]; 
     }
     if(stepOrder==="5"){
        document.getElementsByName("5")[0].style.borderColor = 'red';
        this.state.stepOrder1= 3;
        this.state.stepOrder2= 1;
        this.state.stepOrder3= 2;
        tab = ["1","2","3","4","6"]; 
     }
     if(stepOrder==="6"){
        document.getElementsByName("6")[0].style.borderColor = 'red';
        this.state.stepOrder1= 3;
        this.state.stepOrder2= 2; 
        this.state.stepOrder3= 1;
        tab = ["1","2","3","4","5"]; 
     }
     tab.forEach(i => document.getElementsByName(i)[0].style.borderColor = '#7dbdfd'); 
  }
  createPriorCategories(){
      let categTab = [];
      for(let i= 0; i<this.state.categories.length;i++){

          categTab.push(<td class="tr2">{i}</td>); 
      }
      return categTab; 
  }
  createPriorCategories2(){
    let categTab = [];
    for(let i= 0; i<this.state.categories.length;i++){

        categTab.push(<td class="tr2">{i}</td>); 
    }
    return categTab; 
  }

  createCategories(){
    let categTab = []; 
    for(let i=0; i<this.state.categories.length ; i++){
       categTab.push(<button id={i} className="button_settings">{this.state.categories[i].name}</button>)
    
    }
    return categTab; 
  }

  handleClick2(e){
     
    let prior = e.target.name

    if(prior === "Prior1"){
        
        if(this.state.cnt1 %2 ===0){
            
            this.state.categoryPriority[this.state.cntPrior]=5;
            document.getElementById(""+this.state.cntPrior).innerHTML= "Déplacement"; 
            this.state.cnt1Bis = this.state.cntPrior; 
            this.state.cntPrior++;
            
        }else {
            this.state.categoryPriority[this.state.cnt1Bis]=0;
            document.getElementById(""+this.state.cnt1Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt1Bis; 
        }
        this.state.cnt1++; 
    }
    if(prior === "Prior2"){
        if(this.state.cnt2 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]=4; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Habitation ";
            this.state.cnt2Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt2Bis]=0;
            document.getElementById(""+this.state.cnt2Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt2Bis;  
        }
        this.state.cnt2++; 
    }
    if(prior === "Prior3"){
        if(this.state.cnt3 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]=7;
            document.getElementById(""+this.state.cntPrior).innerHTML= "Loisirs ";
            this.state.cnt3Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt3Bis]=0;
            document.getElementById(""+this.state.cnt3Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt3Bis; 
        }
        this.state.cnt3++; 
    }
    if(prior === "Prior4"){
        if(this.state.cnt4 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]=1; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Nutrition ";
            this.state.cnt4Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt4Bis]=0; 
            document.getElementById(""+this.state.cnt4Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt4Bis; 
        }
        this.state.cnt4++; 
    }
    if(prior === "Prior5"){
        if(this.state.cnt5 %2 ===0){

            this.state.categoryPriority[this.state.cntPrior]=2; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Soins ";
            this.state.cnt5Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt5Bis]=0; 
            document.getElementById(""+this.state.cnt5Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt5Bis; 
        }
        this.state.cnt5++; 
    }
    if(prior === "Prior6"){
        if(this.state.cnt6 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]=6; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Responsabilité ";
            this.state.cnt6Bis = this.state.cntPrior; 
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt6Bis]=0; 
            document.getElementById(""+this.state.cnt6Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt6Bis; 
        }
        this.state.cnt6++; 
    }
    if(prior === "Prior7"){
        if(this.state.cnt7 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]=3; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Relations/Communication ";
            this.state.cnt7Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt7Bis]=0; 
            document.getElementById(""+this.state.cnt7Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt7Bis; 
        }
        this.state.cnt7++; 
    }
    for(let i = 0 ; i<this.state.categoryPriority.length; i++){
        if(this.state.categoryPriority[i]===""){
            this.state.cntPrior = i; 
            return; 
        }
    }
    console.log(this.state.categoryPriority); 
}
  
  render() {
    return (
        <nav class="container">
            <h4>Paramètres</h4>
            <div>
                <br/>
                <h5>Choisissez l'ordre des étapes que vous voulez</h5>
                <table className="table_settings">
                    <thead>
                        <tr>
                            <td className="cel"><button name="1" onClick={this.handleClick} className="button_settings4">Aime - Aide - Content</button></td>
                            <td className="cel"><button name="2" onClick={this.handleClick} className="button_settings4">Aime - Content - Aide</button></td>
                        </tr>
                        <tr>
                            <td className="cel"><button name="3" onClick={this.handleClick} className="button_settings4">Aide - Aime - Content</button></td>
                            <td className="cel"><button name="4" onClick={this.handleClick} className="button_settings4">Aide - Content - Aime</button></td>
                        </tr>
                        <tr>
                            <td className="cel"><button name="5" onClick={this.handleClick} className="button_settings4">Content - Aide - Aime</button></td>
                            <td className="cel"><button name="6" onClick={this.handleClick} className="button_settings4">Content - Aime - Aide</button></td>
                        </tr>
                    </thead>
                </table>
            </div>
            <br/>
            <div>
                {this.createCategories}
                <div>
    <h5>Choisissez la priorité des catégories </h5>
        <table class="table_settings">
            <thead>
            <tr id = "tr1">
                <td className="cel"><button name="Prior1" className="button_settings" onClick={this.handleClick2}>Déplacement</button></td>
                <td className="cel"><button name="Prior2" className="button_settings" onClick={this.handleClick2}>Habitation</button></td>
            </tr>
            <tr id = "tr2">
                <td className="cel"><button name="Prior3" className="button_settings" onClick={this.handleClick2}>Loisirs</button></td>
                <td className="cel"><button name="Prior4" className="button_settings" onClick={this.handleClick2}>Nutrition</button></td>
            </tr>
            <tr id = "tr3">
                <td className="cel"><button name="Prior5" className="button_settings" onClick={this.handleClick2}>Soins</button></td>
                <td className="cel"><button name="Prior6" className="button_settings" onClick={this.handleClick2}>Responsabilité</button></td>
            </tr>
            </thead>
        </table>
        
        <div class="div_order2">
        <button name="Prior7" class="button_settings5" onClick={this.handleClick2}>Relations/Communication</button>
        </div>
    </div>
            </div>
            <br/>
            <div>
                <table class="table_settings2">
                    <thead>
                        <tr class="tr2">
                            <td class="tr2">1</td><td class="tr2">2</td><td class="tr2">3</td><td class="tr2">4</td><td class="tr2">5</td><td class="tr2">6</td><td class="tr2">7</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="tr2">
                            <td class="tr2" id="0"></td><td class="tr2" id="1"></td><td class="tr2" id="2"></td><td class="tr2" id="3"></td><td class="tr2" id="4"></td><td class="tr2" id="5"></td><td class="tr2" id="6"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table class="table_settings">
                    <thead>
                        <tr>
                           <td className="cel2"><Link to={'/commentary'}><button name="Continue" className="button_settings2" >Continuer dernière partie</button></Link></td>
                           <td className="cel2"><Link to={'/commentary'}><button name="NewGame" className="button_settings2" onClick={this.handleClick3}>Commencer nouvelle partie</button></Link></td>
                        </tr>
                    </thead>
                </table>
            </div>
            
        </nav>
    );
  }
}

export default SettingsPage;