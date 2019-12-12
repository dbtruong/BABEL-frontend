import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/profChildChoiceStyle.css';
import Button from 'react-bootstrap/Button';
import profChildChoiceAPI from '../../../API/profChildChoiceAPI.js';

class ProfChildChoicePage extends Component {

  constructor(){
    super();
    this.api = new profChildChoiceAPI();
    this.state = {
      posts : "",
      id : localStorage.getItem("sessionId")
    }
    this.imagePath = "Images/"
    this.listChildren = this.listChildren.bind(this);
    this.select = this.select.bind(this);
    //this.listChild= this.getChildren(this.id);  
  }

  componentDidMount() {
    this.listChildren();
  }

  async listChildren(){
    //console.log(children);
    let data = await this.api.getChildByProf(this.state.id);
    console.log("oui", data)
    this.setState({
      posts : data.map((child) =>
        <Link to={'/mandate'}><div onClick={e => this.select(child.get("id"))} className="row justify-content-center" key={""+child.get("id")}>
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
        </Link>
      )
    });
  }

  select(id){
    localStorage.setItem("idChild", id);

  }

  render() {
    return (
        <nav className="container">
          <Link to={'/'}><img src="Images/logo.png" alt="logo esope" className="Logo"/></Link><br/>
          <h4>Entrez les informations :</h4>
          {this.state.posts}
          
          <br/>
          <div>

              <Link to={'/newChild'}><Button className="button" class="btn btn-primary btn-lg">Introduire un nouvel enfant</Button></Link>
            
          </div>
        </nav>
    );
  }
}

export default ProfChildChoicePage;