import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/CategoryChoicePage.css';
import CategoryChoiceAPI from '../../../API/CategoryChoiceAPI.js'

class CategoryChoicePage extends Component {
  
    constructor(){
        super();
        this.state = {
            currentCategory : "",
            stepOrder : 0, 
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
        this.api = new CategoryChoiceAPI();
        this.handleClick = this.handleClick.bind(this);
    }

  

  handleClick(e){
     
    let prior = e.target.name

    if(prior === "Prior1"){
        
        if(this.state.cnt1 %2 ===0){
            
            this.state.categoryPriority[this.state.cntPrior]="Déplacement";
            document.getElementById(""+this.state.cntPrior).innerHTML= "Déplacement"; 
            this.state.cnt1Bis = this.state.cntPrior; 
            this.state.cntPrior++;
            
        }else {
            this.state.categoryPriority[this.state.cnt1Bis]="";
            document.getElementById(""+this.state.cnt1Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt1Bis; 
        }
        this.state.cnt1++; 
    }
    if(prior === "Prior2"){
        if(this.state.cnt2 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Habitation"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Habitation ";
            this.state.cnt2Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt2Bis]="";
            document.getElementById(""+this.state.cnt2Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt2Bis;  
        }
        this.state.cnt2++; 
    }
    if(prior === "Prior3"){
        if(this.state.cnt3 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Loisirs";
            document.getElementById(""+this.state.cntPrior).innerHTML= "Loisirs ";
            this.state.cnt3Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt3Bis]="";
            document.getElementById(""+this.state.cnt3Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt3Bis; 
        }
        this.state.cnt3++; 
    }
    if(prior === "Prior4"){
        if(this.state.cnt4 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Nutrition"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Nutrition ";
            this.state.cnt4Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt4Bis]=""; 
            document.getElementById(""+this.state.cnt4Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt4Bis; 
        }
        this.state.cnt4++; 
    }
    if(prior === "Prior5"){
        if(this.state.cnt5 %2 ===0){

            this.state.categoryPriority[this.state.cntPrior]="Soins"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Soins ";
            this.state.cnt5Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt5Bis]=""; 
            document.getElementById(""+this.state.cnt5Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt5Bis; 
        }
        this.state.cnt5++; 
    }
    if(prior === "Prior6"){
        if(this.state.cnt6 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Responsabilité"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Responsabilité ";
            this.state.cnt6Bis = this.state.cntPrior; 
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt6Bis]=""; 
            document.getElementById(""+this.state.cnt6Bis).innerHTML= "/";
            this.state.cntPrior = this.state.cnt6Bis; 
        }
        this.state.cnt6++; 
    }
    if(prior === "Prior7"){
        if(this.state.cnt7 %2 ===0){
            this.state.categoryPriority[this.state.cntPrior]="Relations/Communication"; 
            document.getElementById(""+this.state.cntPrior).innerHTML= "Relations/Communication ";
            this.state.cnt7Bis = this.state.cntPrior;
            this.state.cntPrior++;
        }else {
            this.state.categoryPriority[this.state.cnt7Bis]=""; 
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
    localStorage.setItem("CategoryTab",this.state.categoryPriority); 
}

  render() {
    return (
        <nav className="container">
        <br/><br/>
        <div>
          <h4>Choissisez votre Categorie</h4>
        </div>
        <div>
            <table class="table_order">
                <thead>
                    <tr>
                        <td><button name="Prior1" class="category_button" onClick={this.handleClick}>Déplacement</button></td>
                        <td><button name="Prior2" class="category_button" onClick={this.handleClick}>Habitation</button></td>
                    </tr>
                    <tr>
                        <td><button name="Prior3" class="category_button" onClick={this.handleClick}>Loisirs</button></td>
                        <td><button name="Prior4" class="category_button" onClick={this.handleClick}>Nutrition</button></td>
                    </tr>
                    <tr>
                        <td><button name="Prior5" class="category_button" onClick={this.handleClick}>Soins</button></td>
                        <td><button name="Prior6" class="category_button" onClick={this.handleClick}>Responsabilité</button></td>
                    </tr>
                    
                </thead>
            </table>
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
        <Link to={'/sortingTopics'} className="nav-link"><button name="continue" class="category3_button">Continue</button></Link>
        </div>
        
        </nav>
     
    );
    
  }
   
}


export default CategoryChoicePage;