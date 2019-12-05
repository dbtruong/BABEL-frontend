import React, { Component } from 'react'

import '../../../Assets/Css/ChildSummary.css';
import ChildSummaryAPI from '../../../API/ChildSummaryAPI.js'

class ChildSummary extends Component{

    constructor(){
        super();
        this.state = {
            listImages : []
        }
        this.api = new ChildSummaryAPI();
    }

    createSummary(){
        //Can't seem to use setState somehow
        //this.setState({listImages : this.api.getChildSummary()});
        let images = this.api.getChildSummary();
        this.state.listImages = images;
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
                children.push(<img src="/Images/unlike.png" alt="je n'aime pas"/>)
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
                {this.createSummary()}
            </div>
        )
    }
}

export default ChildSummary;