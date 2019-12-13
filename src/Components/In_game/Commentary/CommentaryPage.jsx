import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/CommentaryStyle.css';
import commentaryAPI from '../../../API/CommentaryAPI.js';
import { checkPropTypes } from 'prop-types';

class commentaryPage extends Component{

    constructor(){
        super();
        console.log(localStorage.getItem("TabPriorCategory"));
        this.state = {
            id : localStorage.getItem("TabPriorCategory").split(','),
            posts : ""
        }
        this.api = new commentaryAPI();
        this.imagePath = "Images/"
        this.getCurrentCategory = this.commentaries.bind(this);
    }

    componentDidMount(){
        this.commentaries();
    }

    commentaries(){
        let data = [];
        let ids = this.state.id;
        
        ids.forEach(function(id){
            let habits = this.api.getHabitsByCategory(id)
            habits.forEach(function(habit){
                data.push(habit);
            })
        }, this);
        this.setState({
            posts : data.map((habit)=>
            <div className="row justify-content-center habit" key = {habit.get("id")}>
                <div className="col-sm-2">
                    <img className="picture" src={this.imagePath+habit.get("picture")} alt={habit.get("nom")}/>
                </div>
                <div className="col-sm-4">
                    <textarea class="form-control" id={habit.get("id")} rows="2"></textarea>
                </div>
                <button onClick={e => this.select(habit.get("id"))}className="button" id={habit.get("id") }>Valider</button>
            </div>
            )
        });
    }

    select(){
        localStorage.setItem("comment", "coucou");
    }

    render(){
        return(
            <div>
                {this.state.posts}
                <br/>
                <Link to={'/summary'}><button className="button_mandat">Tout confirmer</button></Link>
                <Link to={'/'}><button className="button_mandat">Quitter</button></Link>
            </div>
        );
    }

}

export default commentaryPage;