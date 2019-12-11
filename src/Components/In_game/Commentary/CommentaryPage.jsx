import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/CommentaryStyle.css';
import commentaryAPI from '../../../API/CommentaryAPI.js';

class commentaryPage extends Component{

    constructor(){
        super();
        this.state = {
            id : localStorage.getItem("tabPriorCategory"),
            posts : ""
        }
        this.api = new commentaryAPI();
        this.imagePath = "Images/"
        this.getCurrentCategory = this.commentaries.bind(this);
    }

    componentDidMount(){
        this.commentaries();
    }

    async commentaries(){
        let data = [];
        this.state.id.forEach(function(id){
            data.push(this.api.getHabitsByCategory(id));
        });
        this.setState({
            posts : data.map((habit)=>
            <div className="row justify-content-center habit" key = {""+habit.get("id")}>
                <div className="col-sm-2">
                    <img src={this.imagePath+habit.get("picture")} alt={habit.get("nom")} className="Logo"/>
                </div>
                <div className="col-sm-4">
                    <textarea class="form-control" id={habit.get("id")} rows="4"></textarea>
                </div>
                <button className="button">Valider</button>
            </div>
            )
        });
    }

    render(){
        return(
            <div>
                {this.state.posts}
                <Link to={'/summary'}><button className="button">Tout confirmer</button></Link>
            </div>
        );
    }

}

export default commentaryPage;