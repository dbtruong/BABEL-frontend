import React, {Component} from 'react';
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
			index : 0,
			array : []
		}
		this.api = new choiceAPI();
		let temp = JSON.parse(localStorage.getItem('chosenPictures'));
		this.state.listImages = temp;
		this.state.currentImg = "Images/" + temp[0].name;
		this.state.currentDesc = temp[0].desc;
		//console.log(temp);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.state.index += 1;
		if (this.state.index >= this.state.listImages.length){
			this.state.array.push({
				"name" : "Images/" + this.state.listImages[this.state.index-1].name,
				"res" : e.target.name
			})
			localStorage.setItem('picturesHelp', JSON.stringify(this.state.array))
			this.props.history.push("/choiceHappy")
		} else {
			this.setState({
				currentImg : "Images/" + this.state.listImages[this.state.index].name,
				currentDesc : this.state.listImages[this.state.index].desc
			})
			this.state.array.push({"name" : this.state.currentImg, "res" : e.target.name})
		}		
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
		</div>
		);
	}
};

export default ChoiceHelp;

