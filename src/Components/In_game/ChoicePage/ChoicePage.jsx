import React, {Component} from 'react';
import '../../../Assets/Css/ChoicePage.css';
import choiceAPI from '../../../API/choiceAPI.js'
import Button from 'react-bootstrap/Button'

class ChoicePage extends Component {
	
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
		//this.setState({listImages : this.api.getCategory()})
		this.state.listImages = this.api.getCategory();
		//console.log(this.state.listImages[0][0].name)
		this.state.currentImg = "Images/deplacements/" + this.state.listImages[this.state.indexCat][this.state.indexImg].name + ".jpg";
		this.state.currentDesc = this.state.listImages[this.state.indexCat][this.state.indexImg].desc;
		//console.log(this.state.currentImg)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const catName = ["deplacements", "habitation", "loisirs", "nutrition", "relationscom", "responsabilites", "soinspersonnels"]
		const nbImages = [5,7,4,7,3,1,17]
		let tempImg = this.state.indexImg + 1;
		let tempCat = this.state.indexCat + 1;
		if (tempImg >= nbImages[this.state.indexCat]){
			this.state.indexCat = tempCat;
			tempImg = 0;
			this.state.indexImg = tempImg;
		}
		console.log(tempImg, nbImages[this.state.indexCat])
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
				<p>{this.state.currentDesc}</p>
				<img src={this.state.currentImg} alt={this.state.currentDesc} className="imgHabit"/>
			</div>
			<div className="row d-flex justify-content-center divHeigt">
				<Button className="like" onClick={this.handleClick}>
					<div className="page"> J'aime </div>
					<input className="imgButton" type="image" src="Images/like.png" alt="j'aime"/>
				</Button>
				<div className="col-sm-1"> </div>
				<Button className="dislike" onClick={this.handleClick}>
					<div className="page"> J'aime pas</div>
					<input className="imgButton" type="image" src="Images/dislike.png" alt="je n'aime pas"/>
				</Button>
			</div>
		</div>
		);
	}
};

export default ChoicePage;

