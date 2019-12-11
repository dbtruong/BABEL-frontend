import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../../Assets/Css/ChoicePage.css';
import choiceAPI from '../../../API/choiceAPI.js'
import Button from 'react-bootstrap/Button'

class ChoiceHelp extends Component {
	
	constructor(){
		super();
		this.state = {
			listImages : [],
			currentImg : "",
			currentDesc : "",
			indexCat : 0,
			indexImg : 0
		}
		this.api = new choiceAPI();
		this.state.listImages = this.api.getImages();
		this.state.currentImg = "Images/deplacements/" + this.state.listImages[this.state.indexCat][this.state.indexImg].name + ".jpg";
		this.state.currentDesc = this.state.listImages[this.state.indexCat][this.state.indexImg].desc;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.api.sendImage(this.state.listImages[this.state.indexCat][this.state.indexImg].name, e.target.name);
		const catName = ["deplacements", "habitation", "loisirs", "nutrition", "relationscom", "responsabilites", "soinspersonnels"]
		const nbImages = [5,7,4,7,3,1,17]
		let tempImg = this.state.indexImg + 1;
		let tempCat = this.state.indexCat + 1;
		if (tempImg >= nbImages[this.state.indexCat]){
			this.state.indexCat = tempCat;
			tempImg = 0;
			this.state.indexImg = tempImg;
		}
		this.state.indexImg = tempImg;
		this.setState({
			currentImg : 
			"Images/" + catName[this.state.indexCat] + "/" + this.state.listImages[this.state.indexCat][this.state.indexImg].name + ".jpg",
			currentDesc :
			this.state.listImages[this.state.indexCat][this.state.indexImg].desc
		})
	}

	render(){
		return(
		<div className="page">
			<div className="mb-5">
				<h1 className="title">J'ai besoin d'aide ou je n'ai pas besoin d'aide pour...</h1>
				<p>{this.state.currentDesc}</p>
				<img src={this.state.currentImg} alt={this.state.currentDesc} className="imgHabit"/>
			</div>
			
			<div className="row d-flex justify-content-center divHeigt">
				
				<button name="nohelp" className="like" onClick={this.handleClick}>	
					<input name="nohelp" className="imgButton" type="image" src="Images/nohelp.png" alt="je n'ai pas besoin d'aide"/>
				</button>
				<Button name="" className="skip" onClick={this.handleClick}>Je ne sais pas</Button>
				<button name="help" className="dislike" onClick={this.handleClick}>					
					<input name="help" className="imgButton" type="image" src="Images/help.png" alt="j'ai besoin d'aide"/>
				</button>
			</div>

			<Link to={'/choiceHappy'}><Button className="next">Aller à la page suivante</Button></Link>
		</div>
		);
	}
};

export default ChoiceHelp;

