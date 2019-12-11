import React, { Component } from 'react';
import '../../../Assets/Css/Summary.css';
import { Link } from 'react-router-dom';
import SummaryAPI from '../../../API/SummaryAPI.js'

class SummaryPage extends Component {

    constructor(){
        super();
        this.state = {
            currentCategory : 0,
            help : 0,
            love : 0,
            happy : 0,
            SessionDate : "",
            SessionDates : [],
            sessions : [],
            Session : "", 
            Summary : []

        }
        this.api = new SummaryAPI();
        //this.state.SessionDates = this.api.loadSessions(); 
        //this.state.Summary = this.api.loadSummary(); 
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this); 
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this); 
        this.resume = this.resume.bind(this); 
        
    }
    componentDidMount(){
        this.createSelect(); 
    }

    async createSelect(){
        
        //let childId = localStorage.getItem("childId"); 
        let childId = 1; 
        this.state.sessions = await this.api.loadSessions(childId); 
        console.log(this.state.sessions.id);
        console.log(this.state.sessions.length);

       /* let children = []
        this.state.sessions.map((ses) => (
            children.push(<option key={ses.id}> {ses.start_date}</option>)
            )) ;
        
       //if(this.state.sessions.length <1){
         this.setState({
            SessionDates: children
          });
       /* }else {
            this.setState({Session : <option key={this.state.sessions.id} value={this.state.sessions.id}></option>});
        }*/
    }
    handleChange(e){
        this.setState({value: e.target.value});
        localStorage.setItem("GameSessionChosen",e.target.value); 
    }
   async handleClick5(e){
       let gameSessionId = localStorage.getItem("GameSessionChosen"); 
       let gameSession = await this.api.getGameSession(gameSessionId); 
       let elem = document.getElementById("comments");
       this.api.updateChildSession(gameSession.id,gameSession.start_date,elem.target.value, gameSession.prof_comment, gameSession.step_one, gameSession.step_two, gameSession.step_three, gameSession.finished_state, gameSession.version, gameSession.child_id, gameSession.user_id, gameSession.mandate_id);
    }

    handleClick2(e){
        let ChildState = e.target.name
        let elem; 
        if(ChildState==="Love"){
            document.getElementsByName("Love")[0].style.borderColor = 'red';
            this.state.love = 1; 
            elem ="NotLove"; 
        }
        if(ChildState==="NotLove"){  
            document.getElementsByName("NotLove")[0].style.borderColor = 'red';          
            this.state.love = 0; 
            elem = "Love"; 
        }
        document.getElementsByName(elem)[0].style.borderColor = '#7dbdfd';
    }
    handleClick3(e){
        let ChildState = e.target.name
        let elem;
        if(ChildState==="Help"){
            document.getElementsByName("Help")[0].style.borderColor = 'red';
            this.state.help = 1; 
            elem = "NotHelp";
        }
        if(ChildState==="NotHelp"){
            document.getElementsByName("NotHelp")[0].style.borderColor = 'red';
            this.state.help = 0; 
            elem = "Help";
        }
        document.getElementsByName(elem)[0].style.borderColor = '#7dbdfd';
    }
    handleClick4(e){
        let ChildState = e.target.name
        let elem; 
        if(ChildState==="Happy"){
            document.getElementsByName("Happy")[0].style.borderColor = 'red';
            this.state.happy = 1; 
            elem = "NotHappy"; 
        }
        if(ChildState==="NotHappy"){
            document.getElementsByName("NotHappy")[0].style.borderColor = 'red';
            this.state.happy = 0; 
            elem = "Happy"; 
        }
        document.getElementsByName(elem)[0].style.borderColor = '#7dbdfd';

    }
    
    handleClick(e){
        // 1 Déplacement
        // 2 Habitation
        // 3 Loisirs
        // 4 Nutrition
        // 5 Soins
        // 6 Responsabilité
        // 7 Relations/Communication
         let categoryChoice = e.target.name
         
         let tab; 
         if(categoryChoice==="1"){
            document.getElementsByName("1")[0].style.borderColor = 'red';
            this.state.currentCategory= 1; 
            tab = ["2","3","4","5","6"]; 
         }
         if(categoryChoice==="2"){
            document.getElementsByName("2")[0].style.borderColor = 'red';
            this.state.currentCategory= 2;
            tab = ["1","3","4","5","6","7"]; 
         }
         if(categoryChoice==="3"){
            document.getElementsByName("3")[0].style.borderColor = 'red';
            this.state.currentCategory= 3;
            tab = ["1","2","4","5","6","7"]; 
         }
         if(categoryChoice==="4"){
            document.getElementsByName("4")[0].style.borderColor = 'red';
            this.state.currentCategory= 4;
            tab = ["1","2","3","5","6","7"]; 
         }
         if(categoryChoice==="5"){
            document.getElementsByName("5")[0].style.borderColor = 'red';
            this.state.currentCategory= 5;
            tab = ["1","2","3","4","6","7"]; 
         }
         if(categoryChoice==="6"){
            document.getElementsByName("6")[0].style.borderColor = 'red';
            this.state.currentCategory= 6;
            tab = ["1","2","3","4","5","7"]; 
         }
         if(categoryChoice==="7"){
            document.getElementsByName("7")[0].style.borderColor = 'red';
            this.state.currentCategory= 7;
            tab = ["1","2","3","4","5","6"]; 
         }
         tab.forEach(element => document.getElementsByName(element)[0].style.borderColor = '#7dbdfd');
    }
    
    getHabit(habit){
        let f= "X"; 
        let t= "V"; 
        if(habit.id==="Love"){
            if(habit.love){
                return t; 
            }else{
                return f; 
            }
        }
        if(habit.id==="Help"){
            if(habit.help){
                return t; 
            }else{
                return f; 
            }
        }
        if(habit.id==="Happy"){
            if(habit.happy){
                return t;
            }else{
                return f; 
            }
        }   
    }
    

   async resume(){
        let habits = this.state.Summary; 
        let summary = []; 
        for(let i =0; i < habits.length ; i++){
             let picture = await this.api.loadPicture(habits[i].picture_id); 
            summary.push(<td><img src={picture.path} alt={picture.id}/></td>)
            summary.push(<td>{this.gethabit(habits.do_like)}</td>)
            summary.push(<td>{this.getHabit(habits.is_autonomous)}</td>) 
            summary.push(<td>{this.getHabit(habits.is_happy)}</td>)
            
        }
        return summary; 
        
        //{this.resume(this.api.getHabits())}
    }
    
        
    

    render() {
    return (
        <nav class="container">
            <h4>Résumé</h4>
            <div>
                <h5>Choisissez la date de session</h5>
                <select onChange={this.handleChange}> 
                 {this.state.sessions}
                 {this.state.Session}
                </select>
                <button class="button_sum">Confirmer</button>
            </div>
          
            <div>
             <table class="elem_center">
                <tbody>
                    <tr>
                        <td class="cel3">
                        <h5>Choisissez une catégorie </h5>
                        <div>
                            <table class="table_order">
                            <thead>
                                <tr>
                                    <td class="cel"><button name="1" class="button_settings4" onClick={this.handleClick}>Déplacement</button></td>
                                    <td class="cel"><button name="2" class="button_settings4" onClick={this.handleClick}>Habitation</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button name="3" class="button_settings4" onClick={this.handleClick}>Loisirs</button></td>
                                    <td class="cel"><button name="4" class="button_settings4" onClick={this.handleClick}>Nutrition</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button name="5" class="button_settings4" onClick={this.handleClick}>Soins</button></td>
                                    <td class="cel"><button name="6" class="button_settings4" onClick={this.handleClick}>Responsabilité</button></td>
                                </tr>
                            </thead>
                            </table>
                            <div class="div_order">
                            <button name="7" class="button_settings4" onClick={this.handleClick}>Relations/Communication</button>
                            </div>
                        </div>
                        </td>
                        
                        <td>
                        <h5>Choisissez pour trier</h5>
                        <table>
                            <thead>
                                <tr>
                                    <td class="cel"><button name="Love"class="button_settings4" onClick={this.handleClick2}>Aime</button></td>
                                    <td class="cel"><button name="NotLove" class="button_settings4" onClick={this.handleClick2}>Aime pas</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button name="Help" class="button_settings4" onClick={this.handleClick3}>Besoin d'aide</button></td>
                                    <td class="cel"><button name="NotHelp" class="button_settings4" onClick={this.handleClick3}>Pas Besoin d'aide</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button name="Happy" class="button_settings4" onClick={this.handleClick4}>Content</button></td>
                                    <td class="cel"><button name="NotHappy" class="button_settings4" onClick={this.handleClick4}>Content pas</button></td>
                                </tr>
                            </thead>
                        </table>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <br/>
            <div>
                <table class="tab_dimension">
                    <thead>
                        <tr>
                            <td class="cel4"><h4>Habitudes</h4></td>
                            <td class="cel4"><img src="Images/like.png" alt="logo aime" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/help.png" alt="logo aide" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/happy.png" alt="logo content" class="logo_summary"/></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div>
                <h4>Commentaires</h4>
                <textarea id="comments" rows="5" cols="40">

                </textarea>
                <br/>
                <button class="button_settings5" onclick={this.handleClick5}>Commenter</button>
            </div>
            <br/>
        </nav>
        
    );
  }
}

export default SummaryPage;