import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../../../Assets/Css/ChildSummary.css';
import ChildSummaryAPI from '../../../API/ChildSummaryAPI.js'

class ChildSummary extends Component{

    constructor(){
        super();
        this.state = {
            listImages : [],
            date : ""
        }
        this.api = new ChildSummaryAPI();
    }

    //Il faudra gérer les différentes catégories en fonction de l'image
    createSummary(){
        //Can't seem to use setState somehow
        //this.setState({listImages : this.api.getChildSummary()});
        let sum = this.api.getChildSummary();
        //console.log(sum[0].date)
        this.state.listImages = sum[0].images;
        this.state.date = sum[0].date;
        //console.log(this.state.listImages);
        let summary = [];
        let list = this.state.listImages;
        for(let i = 0; i < list.length; i++){
            let children = []
            let desc = list[i].name;
            let path = "Images/deplacements/"+desc+".jpg";
            
            children.push(<img src={path} alt={desc}/>)
            if (list[i].like){
                children.push(<img src="/Images/like.png" alt="j'aime"/>)
            } else {
                children.push(<img src="/Images/dislike.png" alt="je n'aime pas"/>)
            }
            if (list[i].help){
                children.push(<img src="/Images/help.png" alt="j'ai besoin d'aide"/>)
            } else {
                children.push(<img src="/Images/nohelp.png" alt="je n'ai pas besoin d'aide"/>)
            }
            if (list[i].happy){
                children.push(<img src="/Images/happy.png" alt="je suis content"/>)
            } else {
                children.push(<img src="/Images/unhappy.png" alt="je ne suis pas content"/>)
            }
            summary.push(<div>{children}</div>)
        }
        return summary
    }
    

    render(){
        return(
            <div className="container">
                <h1>Synthèse de l'enfant</h1><br/>
                {this.createSummary()}<br/>
                <h2>Séance du  {this.state.date}</h2>
                <Link to={"/start"}><img src="Images/next.png"/></Link>
            </div>
        )
    }
}

export default ChildSummary;