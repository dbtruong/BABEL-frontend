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
            comment : [], 
            Session : "", 
            Summary : [],
            bool : 0,
            bool2 : 0

        }
        this.api = new SummaryAPI();
        //this.state.Summary = this.api.loadSummary(); 
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this); 
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this); 
        this.summary = this.summary.bind(this); 
        //this.resume = this.resume.bind(this); 
        
        
    }
    componentDidMount(){
       // this.createSelect(); 
       // this.resume(); 
       this.summary(); 
    }
    summary(){
    let summary = this.api.getChildSummary();
    let sum = []; 
    let path = "Images"; 
    let gameSession = localStorage.getItem("GameSessionChosen"); 
    for(let i = 0; i <summary.length; i++){
        localStorage.getItem("GameSessionChosen"); 
        if(summary[i].date===gameSession || this.state.bool2 === 0){
            
        for(let j =0; j < summary[i].images.length; j++){
            if( this.state.bool===0 ){
                let like = this.getLove(summary[i].images[j].like); 
                let help = this.getHelp(summary[i].images[j].help); 
                let happy = this.getHappy(summary[i].images[j].happy); 
                sum.push(<tr><td class="cel5"><img class="img_render" src={path+summary[i].images[j].name+".jpg"} alt={summary[i].images[j].name}/></td><td class="cel4"><h1>{like}</h1></td><td class="cel4"><h1>{help}</h1></td><td class="cel4"><h1>{happy}</h1></td></tr>);
            }else if (summary[i].images[j].category===this.state.currentCategory){
                let like = this.getLove(summary[i].images[j].like); 
                let help = this.getHelp(summary[i].images[j].help); 
                let happy = this.getHappy(summary[i].images[j].happy); 
                sum.push(<tr><td class="cel5"><img class="img_render" src={path+summary[i].images[j].name+".jpg"} alt={summary[i].images[j].name}/></td><td class="cel4"><h1>{like}</h1></td><td class="cel4"><h1>{help}</h1></td><td class="cel4"><h1>{happy}</h1></td></tr>);
            }
        }
    }
    }
    console.log(localStorage.getItem("comment"))
    if(localStorage.getItem("comment")==1){
        let com = []
        com[0]= <div><h3>Commentaires du professionnel</h3><h5>coucou</h5></div>
        this.setState({comment: com})

    }else {
        let com = []
        com[0]=<div></div>
        this.setState({comment: com})
    }
    
    this.setState({Summary : sum}); 
    //return sum; 
    }

    /*async createSelect(){
        
       let childId = localStorage.getItem("childId");
       this.state.sessions = await this.api.loadSessions(childId);
       let children = []
        this.state.sessions.map((ses) => (
            children.push(<option key={ses.id}> {ses.start_date}</option>)
            )) ;
        
       if(this.state.sessions.length <1){
         this.setState({
            SessionDates: children
          });
       }else {
            this.setState({Session : <option key={this.state.sessions.id} value={this.state.sessions.id}></option>});
        }
    }*/
   /* componentDidUpdate(){
        this.summary(); 
    }*/

    handleChange(e){
        this.setState({session: e.target.value});
        console.log(e.target.value); 
        localStorage.setItem("GameSessionChosen",e.target.value); 
        this.state.bool2 = 1; 
        this.summary(); 
    }
   async handleClick5(e){
       let gameSessionId = localStorage.getItem("GameSessionChosen"); 
       let gameSession = await this.api.getGameSession(gameSessionId);
        console.log(gameSession )
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
         this.state.bool = 1; 
         let tab; 
         if(categoryChoice==="1"){
            document.getElementsByName("1")[0].style.borderColor = 'red';
            this.state.currentCategory= "deplacement"; 
            tab = ["2","3","4","5","6","8"]; 
         }
         if(categoryChoice==="2"){
            document.getElementsByName("2")[0].style.borderColor = 'red';
            this.state.currentCategory= "habitation";
            tab = ["1","3","4","5","6","7","8"]; 
         }
         if(categoryChoice==="3"){
            document.getElementsByName("3")[0].style.borderColor = 'red';
            this.state.currentCategory= "loisirs";
            tab = ["1","2","4","5","6","7","8"]; 
         }
         if(categoryChoice==="4"){
            document.getElementsByName("4")[0].style.borderColor = 'red';
            this.state.currentCategory= "nutrition";
            tab = ["1","2","3","5","6","7","8"]; 
         }
         if(categoryChoice==="5"){
            document.getElementsByName("5")[0].style.borderColor = 'red';
            this.state.currentCategory= "soins";
            tab = ["1","2","3","4","6","7","8"]; 
         }
         if(categoryChoice==="6"){
            document.getElementsByName("6")[0].style.borderColor = 'red';
            this.state.currentCategory= "responsabilite";
            tab = ["1","2","3","4","5","7","8"]; 
         }
         if(categoryChoice==="7"){
            document.getElementsByName("7")[0].style.borderColor = 'red';
            this.state.currentCategory= "communication";
            tab = ["1","2","3","4","5","6","8"]; 
         }
         if(categoryChoice==="8"){
            document.getElementsByName("8")[0].style.borderColor = 'red';
            this.state.bool=0;
            tab = ["1","2","3","4","5","6","7"]; 
         }
         tab.forEach(element => document.getElementsByName(element)[0].style.borderColor = '#7dbdfd');
         this.summary(); 
    }
    
    getLove(love){
        let f= "X"; 
        let t= "V"; 
        
        if(love){
            return t; 
        }else{
            return f; 
        }
    }
    getHelp(help){
        let f= "X"; 
        let t= "V"; 
        
        if(help){
            return t; 
        }else{
            return f; 
        }
    }
        
    getHappy(happy){
        let f= "X"; 
        let t= "V"; 

        if(happy){
            return t;
        }else{
            return f; 
        }
    }
    

   /*async resume(){
        let habits = this.state.Summary; 
        let summary = []; 
        for(let i =0; i < habits.length ; i++){
             let picture = await this.api.loadPicture(habits[i].picture_id); 
            summary.push(<td><img src={picture.path} alt={picture.id}/></td>)
            summary.push(<td>{this.getLove(habits.do_like)}</td>)
            summary.push(<td>{this.getHelp(habits.is_autonomous)}</td>) 
            summary.push(<td>{this.getHappy(habits.is_happy)}</td>)
            
        }
        return summary; 
        
    }*/
    
        
    

    render() {
    return (
        <nav class="container">
            <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="imgLogo2"/></Link><br/>
            <h2>Résumé</h2>
            <br/>
            <div>
                <h3>Choisissez la date de session</h3>
                <select onChange={this.handleChange}> 
                 {/*{this.state.sessions}
                 {this.state.Session}*/}
                 <option value = "13 décembre 2019">13 décembre 2019</option>
                 <option value = "15 novembre 2019">15 novembre 2019</option>
                 <option value = "12 septembre 2019">12 septembre 2019</option>
                </select>
        
            </div>
            <div>
             <table class="elem_center">
                <tbody>
                    <tr>
                        <td class="cel3">
                        <h3>Choisissez une catégorie </h3>
                        <div>
                            <table class="table_order">
                            <thead>
                                <tr>
                                    <td class="cel6"><button name="1" class="category_button" onClick={this.handleClick}>Déplacement</button></td>
                                    <td class="cel6"><button name="2" class="category_button" onClick={this.handleClick}>Habitation</button></td>
                                </tr>
                                <tr>
                                    <td class="cel6"><button name="3" class="category_button" onClick={this.handleClick}>Loisirs</button></td>
                                    <td class="cel6"><button name="4" class="category_button" onClick={this.handleClick}>Nutrition</button></td>
                                </tr>
                                <tr>
                                    <td class="cel6"><button name="5" class="category_button" onClick={this.handleClick}>Soins</button></td>
                                    <td class="cel6"><button name="6" class="category_button" onClick={this.handleClick}>Responsabilité</button></td>
                                </tr>
                            </thead>
                            </table>
                            <div class="div_order">
                            <button name="7" class="category_button" onClick={this.handleClick}>Communication</button>
                            <br/><br/>
                            <button name="8" class="category_button" onClick={this.handleClick}>Pas de categorie</button>
                            </div>
                        </div>
                        </td>
                        {/*
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
                        </td>*/}
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
                          {this.state.Summary}
                            {/*this.state.Session*/}
                        
                    </tbody>
                </table>
            </div>
            <br/>
            <div>{this.state.comment}</div>
            <br/>
            <div>
                <h3>Commentaires</h3>
                <textarea id="comments" rows="5" cols="80">

                </textarea>
                <br/>
                
                <button class="button_summary10" onclick={this.handleClick5}>Commenter</button>
            </div>
            <br/>
        </nav>
        
    );
  }
}

export default SummaryPage;