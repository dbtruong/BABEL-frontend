import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/CommentaryStyle.css';
import commentaryAPI from '../../../API/CommentaryAPI.js';

class commentaryPage extends Component{

    constructor(){
        super();
        this.api = new commentaryAPI();
        this.imagePath = "Images/"
        this.id = 1;
    }

    commentaries(habits){
        return habits.map((habit)=>
            <div className="row justify-content-center habit" key = {""+habit.get("id")}>
                <div className="col-sm-2">
                    <img src={this.imagePath+habit.get("picture")} alt={habit.get("nom")} className="Logo"/>
                </div>
                <div className="col-sm-4">
                    <textarea class="form-control" id={habit.get("id")} rows="4"></textarea>
                </div>
                <button className="button">Valider</button>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.commentaries(this.api.getHabitsByCategory(this.id))}
                <Link to={'/summary'}><button className="button">Tout confirmer</button></Link>
            </div>
        );
    }

}

export default commentaryPage;