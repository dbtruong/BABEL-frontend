import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SettingsAPI from '../../../API/SettingsAPI.js'
import '../../../Assets/Css/SettingsPage.css';

class SettingsPage extends Component {
  
  constructor(){
        super();
        this.state = {
            currentCategory : "",
            stepOrder : 0, 
            categoryPriority : [],
            tabPrior : [], 
            cntPrior: 1,
            cnt1 : 0,
            cnt2 : 0,
            cnt3 : 0,
            cnt4 : 0,
            cnt5 : 0, 
            cnt6 : 0, 
            cnt7 : 0
            
        }
        this.api = new SettingsAPI();
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this); 
        
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
     if(stepOrder==="Step1"){
        document.getElementsByName("1")[0].style.borderColor = 'red';
        this.state.stepOrder= 1; 
        tab = ["2","3","4","5","6"]; 
     }
     if(stepOrder==="Step2"){
        document.getElementsByName("2")[0].style.borderColor = 'red';
        this.state.stepOrder= 2;
        tab = ["1","3","4","5","6"]; 
     }
     if(stepOrder==="Step3"){
        document.getElementsByName("3")[0].style.borderColor = 'red';
        this.state.stepOrder= 3;
        tab = ["1","2","4","5","6"]; 
     }
     if(stepOrder==="Step4"){
        document.getElementsByName("4")[0].style.borderColor = 'red';
        this.state.stepOrder= 4;
        tab = ["1","2","3","5","6"]; 
     }
     if(stepOrder==="Step5"){
        document.getElementsByName("5")[0].style.borderColor = 'red';
        this.state.stepOrder= 5;
        tab = ["1","2","3","4","6"]; 
     }
     if(stepOrder==="Step6"){
        document.getElementsByName("6")[0].style.borderColor = 'red';
        this.state.stepOrder= 6;
        tab = ["1","2","3","4","5"]; 
     }
     tab.forEach(i => document.getElementsByName(i)[0].style.borderColor = '#7dbdfd'); 

     
  }
   

  handleClick2(e){
    let prior = e.target.name
    this.state.tabPrior = new Array(false, false, false, false, false, false, false);
    
    if(prior === "Prior1"){
        let cnt; 
        if(this.state.cnt1 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Déplacement";
            document.getElementById(""+this.state.cntPrior).innerHTML= "Déplacement"; 
            cnt = this.state.cntPrior; 
            this.state.tabPrior[this.state.cntPrior]= true; 
        }else {
            this.state.categoryPriority[cnt]="";
            this.state.tabPrior[cnt]= false;  
        }
        this.state.cnt1++; 
    }
    if(prior === "Prior2"){
        if(this.state.cnt2 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Habitation"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Habitation";
        }else {
            this.state.categoryPriority[this.state.cntPrior]=""; 
        }
        this.state.cnt2++; 
    }
    if(prior === "Prior3"){
        if(this.state.cnt3 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Loisirs";
            document.getElementById(""+this.state.cntPrior).innerHTML= "Loisirs";
        }else {
            this.state.categoryPriority[this.state.cntPrior]=""; 
        }
        this.state.cnt3++; 
    }
    if(prior === "Prior4"){
        if(this.state.cnt4 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Nutrition"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Nutrition";
        }else {
            this.state.categoryPriority[this.state.cntPrior]=""; 
        }
        this.state.cnt4++; 
    }
    if(prior === "Prior5"){
        if(this.state.cnt5 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Soins"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Soins";
        }else {
            this.state.categoryPriority[this.state.cntPrior]=""; 
        }
        this.state.cnt5++; 
    }
    if(prior === "Prior6"){
        if(this.state.cnt6 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Responsabilité"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Responsabilité"; 
        }else {
            this.state.categoryPriority[this.state.cntPrior]=""; 
        }
        this.state.cnt6++; 
    }
    if(prior === "Prior7"){
        if(this.state.cnt7 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Relations/Communication"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Relations/Communication"; 
        }else {
            this.state.categoryPriority[this.state.cntPrior]=""; 
        }
        this.state.cnt7++; 
    }
    this.state.cntPrior++; 
    
    

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
                            <td className="cel"><button name="Step1" onClick={this.handleClick} className="button_settings4">Aime - Aide - Content</button></td>
                            <td className="cel"><button name="Step2" onClick={this.handleClick} className="button_settings4">Aime - Content - Aide</button></td>
                        </tr>
                        <tr>
                            <td className="cel"><button name="Step3" onClick={this.handleClick} className="button_settings4">Aide - Aime - Content</button></td>
                            <td className="cel"><button name="Step4" onClick={this.handleClick} className="button_settings4">Aide - Content - Aime</button></td>
                        </tr>
                        <tr>
                            <td className="cel"><button name="Step5" onClick={this.handleClick} className="button_settings4">Content - Aide - Aime</button></td>
                            <td className="cel"><button name="Step6" onClick={this.handleClick} className="button_settings4">Content - Aime - Aide</button></td>
                        </tr>
                    </thead>
                </table>
            </div>
            <br/>
            <div>
            <h5>Choisissez la priorité des catégories </h5>
                <table class="table_settings">
                    <thead>
                    <tr>
                        <td className="cel"><button name="Prior1" className="button_settings" onClick={this.handleClick2}>Déplacement</button></td>
                        <td className="cel"><button name="Prior2" className="button_settings" onClick={this.handleClick2}>Habitation</button></td>
                    </tr>
                    <tr>
                        <td className="cel"><button name="Prior3" className="button_settings" onClick={this.handleClick2}>Loisirs</button></td>
                        <td className="cel"><button name="Prior4" className="button_settings" onClick={this.handleClick2}>Nutrition</button></td>
                    </tr>
                    <tr>
                        <td className="cel"><button name="Prior5" className="button_settings" onClick={this.handleClick2}>Soins</button></td>
                        <td className="cel"><button name="Prior6" className="button_settings" onClick={this.handleClick2}>Responsabilité</button></td>
                    </tr>
                    </thead>
                </table>
                
                <div class="div_order2">
                <button name="Prior7" class="button_settings5" onClick={this.handleClick2}>Relations/Communication</button>
                </div>
            </div>
            <p id= "1"></p><p id="2"></p><p id="3"></p><p id="4"></p><p id="5"></p><p id="6"></p><p id="7"></p>
            <div>
                <table class="table_settings">
                    <thead>
                        <tr>
                           <td className="cel2"><Link to={'/commentary'}><button className="button_settings2">Continuer dernière partie</button></Link></td>
                           <td className="cel2"><Link to={'/commentary'}><button className="button_settings2">Commencer nouvelle partie</button></Link></td>
                        </tr>
                    </thead>
                </table>
            </div>
            
        </nav>
    );
  }
}

export default SettingsPage;