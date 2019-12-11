import React, {Component} from 'react';
import '../../../Assets/Css/ChoicePage.css';
import choiceAPI from '../../../API/choiceAPI.js'
import Button from 'react-bootstrap/Button'

class ChoiceLike extends Component {
	
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
			localStorage.setItem('picturesLike', JSON.stringify(this.state.array))
			this.props.history.push("/choiceHelp")
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
				<h1 className="title">J'aime ou je n'aime pas...</h1>
				<p>{this.state.currentDesc}</p>
				<img src={this.state.currentImg} alt={this.state.currentDesc} className="imgHabit"/>
			</div>
			
			<div className="row d-flex justify-content-center divHeigt">
				
				<button name="like" className="like" onClick={this.handleClick}>	
					<input name="like" className="imgButton" type="image" src="Images/like.png" alt="j'aime"/>
				</button>
				<Button name="" className="skip" onClick={this.handleClick}>Je ne sais pas</Button>
				<button name="dislike" className="dislike" onClick={this.handleClick}>
					<input name="dislike" className="imgButton" type="image" src="Images/dislike.png" alt="je n'aime pas"/>
				</button>
			</div>
		</div>
		);
	}
};

export default ChoiceLike;

