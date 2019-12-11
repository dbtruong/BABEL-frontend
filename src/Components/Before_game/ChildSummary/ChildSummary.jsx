import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import '../../../Assets/Css/ChildSummary.css';
import ChildSummaryAPI from '../../../API/ChildSummaryAPI.js'

class ChildSummary extends Component{

    constructor(){
        super();
        this.state = {
            listImages : [],
            date : "",
            summary : [],
            index : 0,
            maxIndex : 0
        }
        this.api = new ChildSummaryAPI();
        this.createSummary = this.createSummary.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.createSummary(this.state.index);
    }

    handleClick(e){
        if (e.target.alt == "suivant"){
            if(this.state.index < this.state.maxIndex){
                this.state.index += 1;
            }
        } else {
            if(this.state.index >= 1){
                this.state.index -= 1;
            }
        }
        this.createSummary(this.state.index);
    }

    //Il faudra gérer les différentes catégories en fonction de l'image
    async createSummary(index){
        //Can't seem to use setState somehow
        //this.setState({listImages : this.api.getChildSummary()});
        let sum = await this.api.getChildSummary();
        this.setState({maxIndex : sum.length-1})
        //console.log("resp : ", sum)
        //console.log(sum[0].date)
        this.state.listImages = sum[index].images;
        this.state.date = sum[index].date;
        //console.log(this.state.listImages);
        let summary = [];
        let list = this.state.listImages;
        for(let i = 0; i < list.length; i++){
            let children = []
            let desc = list[i].name;
            let path = "Images/"+desc+".jpg";

            if (!summary.length){
                summary.push(<img className="navigation" src="/Images/previous.png" alt="précédent" onClick={this.handleClick}/>)
                summary.push(<a className="date">Séance du {this.state.date}</a>)
                summary.push(<img className="navigation" src="/Images/next.png" alt="suivant" onClick={this.handleClick}/>)
            }
            children.push(<img src={path} alt={desc}/>)
            if (list[i].like){
                children.push(<img className="likes" src="/Images/like.png" alt="j'aime"/>)
            } else {
                children.push(<img className="likes" src="/Images/dislike.png" alt="je n'aime pas"/>)
            }
            if (list[i].help){
                children.push(<img className="help" src="/Images/help.png" alt="j'ai besoin d'aide"/>)
            } else {
                children.push(<img className="help" src="/Images/nohelp.png" alt="je n'ai pas besoin d'aide"/>)
            }
            if (list[i].happy){
                children.push(<img className="happy" src="/Images/happy.png" alt="je suis content"/>)
            } else {
                children.push(<img className="happy" src="/Images/unhappy.png" alt="je ne suis pas content"/>)
            }
            summary.push(<div>{children}</div>)
        }
        this.setState({summary : summary})
        return this.state.summary;
    }
    

    render(){
        let button = <Link to={"/"}><Button className="button">Retour</Button></Link>;
        if (localStorage.getItem('role') != "parent"){
            button = <Link to={"/start"}><Button className="button">Page suivante</Button></Link>
        }
        return(
            <div className="container">
                <h1>Synthèse de l'enfant</h1><br/><br/>
                {this.state.summary}<br/>
                {button}
            </div>
        )
    }
}

export default ChildSummary;