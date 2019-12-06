import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/CommentaryStyle.css';
import commentaryAPI from '../../../API/CommentaryAPI.js';

class commentaryPage extends Component{

    constructor(){
        super();
        this.api = new commentaryAPI();
        this.imagePath = "Images/"

    }

    commentaries(habits){
        return habits.map((habit)=>
            <div className="row justify-content-center" key = {""+habit.get("id")}>
                <div className="col-sm-2">
                    <img src={this.imagePath+habit.get("picture")} alt={habit.get("nom")} className="Logo"/>
                </div>
                <div className="col-sm-4">
                    <textarea class="form-control" id={habit.get("id")} rows="4"></textarea>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.commentaries(this.api.getHabits())}
            </div>
        );
    }

}

export default commentaryPage;