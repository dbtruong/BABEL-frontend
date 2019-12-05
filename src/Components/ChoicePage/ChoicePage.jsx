import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/ChoicePage.css';
import Button from 'react-bootstrap/Button';

import Habit from '../../Assets/Images/habit.jpg'
import Like from '../../Assets/Images/like.png'
import Dislike from '../../Assets/Images/dislike.png'

class ChoicePage extends Component {
  render(){
    return(
      <div className="page">
		<div className="mb-5">
		<img src={Habit} alt="habit" className="imgHabit" height="200" width="200"/>
		</div>
		
		<div className="row d-flex justify-content-center divHeigt">
			<div className="col-sm-4 green choice">
				<div className="page"> J'aime </div>
				<img src={Like} alt="like" height="100" width="100"/>
			</div>
			<div className="col-sm-1"> </div>
			<div className="col-sm-4 red choice">
				<div className="page"> J'aime pas</div>
				<img src={Dislike} alt="dislike" height="100" width="100"/>
			</div>
		</div>
	  </div>
    );
  }
};

export default ChoicePage;

