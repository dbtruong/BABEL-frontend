import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/profChildChoiceStyle.css';
import Button from 'react-bootstrap/Button';
import profChildChoiceAPI from '../../../API/profChildChoiceAPI.js';

class ProfChildChoicePage extends Component {

  constructor(){
    super();
    this.api = new profChildChoiceAPI();
    this.imagePath = "Images/"
    this.id = 1;
  }

  listChildren(children){
    return children.map((child) =>
      <div className="row justify-content-center" key={""+child.get("id")}>
        <div className="col-sm-2">
          <img src={this.imagePath+child.get("picture")} alt="photo enfant" className="Logo"/>
        </div>
        <div className="col-sm-4">
           {child.get("id")}
          <br/>
          {child.get("lastName")} {child.get("firstName")}
          <br/>
          {child.get("birthday")}
          <br/>
          {child.get("handicap")}
        </div>
        <br/>
      </div>
    );
  }

  render() {
    return (
        <nav className="container">
          <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
          
          {this.listChildren(this.api.getChildByProf(this.id))}
          
          <br/>
          <div className="row justify-content-center">
            <div className="col-sm-4">
               <Link to={'/newChild'}><Button className="button">Introduire un nouvel enfant</Button></Link>
            </div>
            <div className="col-sm-4">
              <Link to={'/settings'}><Button className="button">Selectionner</Button></Link>
            </div>
          </div>
        </nav>
    );
  }
}

export default ProfChildChoicePage;