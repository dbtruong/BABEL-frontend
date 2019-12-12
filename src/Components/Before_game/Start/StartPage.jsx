import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../../../Assets/Css/startPage.css';

import { Link } from 'react-router-dom';

class StartPage extends Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let like = JSON.parse(localStorage.getItem('recoverLike'))
    let help = JSON.parse(localStorage.getItem('recoverHelp'))
    let happy = JSON.parse(localStorage.getItem('recoverHappy'))
    if(like === 1){
      this.props.history.push("/choiceLike")
    } else if(help === 1){
      this.props.history.push("/choiceHelp")
    } else if(happy === 1){
      this.props.history.push("/choiceHappy")
    } else {
      this.props.history.push("/categoryChoice")
    }
  }

  render() {
    return (
        <nav className="container2">
            <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
            <Button className="roundButton" onClick={this.handleClick}>C'est parti !!</Button>
        </nav>
    );
  }
}

export default StartPage;