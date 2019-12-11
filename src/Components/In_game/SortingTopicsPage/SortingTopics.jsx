import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import SortingTopicsAPI from '../../../API/SortingTopicsAPI.js'

class SortingTopics extends Component {
  
    constructor(){
        super();
        this.state = {
            categories : [],
            listImages : [],
            indexCat : 0,
            indexImg : 0,
            array : []
        }
		this.api = new SortingTopicsAPI();
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e){
        if (e.target.className === "button btn btn-primary"){
            console.log(this.state.array)
            localStorage.setItem("chosenPictures", this.state.array)
        } else {
            this.state.array.push(e.target.alt)
            e.target.style.display = "none";
        }
    }

    render() {
        let categories = ["soinspersonnels", "deplacements", "nutrition", "loisirs"]
        let allImages = this.api.getImages();
        let toReturn = []
        let length, name;
        for(let j = 0; j < categories.length; j++){
            let currentCat = categories[j];
            this.state.indexImg = 0;
            switch(currentCat){
                case "deplacements":
                    length = 5
                    this.state.indexCat = 0;
                    name = "Déplacements"
                    break;
                case "habitation":
                    length = 7
                    this.state.indexCat = 1;
                    name = "Habitation"
                    break;
                case "loisirs":
                    length = 4
                    this.state.indexCat = 2;
                    name = "Loisirs"
                    break;
                case "nutrition":
                    length = 7
                    this.state.indexCat = 3;
                    name = "Nutrition"
                    break;
                case "relationscom":
                    length = 3
                    this.state.indexCat = 4;
                    name = "Relations en communauté"
                    break;
                case "responsabilites":
                    length = 1
                    this.state.indexCat = 5;
                    name = "Responsabilités"
                    break;
                case "soinspersonnels":
                    length = 17
                    this.state.indexCat = 6;
                    name = "Soins personnels"
                    break;
            }
            toReturn.push(<h1>{name}</h1>)
            for(let i = 0; i < length; i++){
                let path = "Images/"+currentCat+"/"+allImages[this.state.indexCat][this.state.indexImg].name+".jpg";
                let desc = allImages[this.state.indexCat][this.state.indexImg].name;
                toReturn.push(<img className="habits" src={path} alt={desc} onClick={this.handleClick}/>)
                if(this.state.indexImg <= length){
                    this.state.indexImg += 1;
                }
            }
        }
        return (
            <div className="container">
                {toReturn}
                <br/><br/>
                <div>
                    <Link to={'/choiceLike'}>
                        <Button className="button" onClick={this.handleClick}>Page suivante</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SortingTopics;