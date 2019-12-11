import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import ResultAPI from '../../../API/ResultAPI.js'

class Result extends Component{

    constructor(){
        super();
        this.state = {
            listImages : [],
            summary : [],
            index : 0,
            maxIndex : 0
        }
        this.api = new ResultAPI();
        this.createResult = this.createResult.bind(this);
    }

    componentDidMount(){
        this.createResult();
    }

    createResult(){
        this.state.listImages = this.api.getResult();

        let summary = [];
        for(let i = 0; i < this.state.listImages.length; i++){
            let children = []
            let path = this.state.listImages[i].path;

            children.push(<img src={path}/>)
            if (this.state.listImages[i].like === "like"){
                children.push(<img className="likes" src="/Images/like.png" alt="j'aime"/>)
            } else if (this.state.listImages[i].like === "dislike"){
                children.push(<img className="likes" src="/Images/dislike.png" alt="je n'aime pas"/>)
            }
            if (this.state.listImages[i].help === "help"){
                children.push(<img className="help" src="/Images/help.png" alt="j'ai besoin d'aide"/>)
            } else if (this.state.listImages[i].help === "nohelp"){
                children.push(<img className="help" src="/Images/nohelp.png" alt="je n'ai pas besoin d'aide"/>)
            }
            if (this.state.listImages[i].happy === "happy"){
                children.push(<img className="happy" src="/Images/happy.png" alt="je suis content"/>)
            } else if (this.state.listImages[i].happy === "unhappy"){
                children.push(<img className="happy" src="/Images/unhappy.png" alt="je ne suis pas content"/>)
            }
            summary.push(<div>{children}</div>)
        }
        this.setState({summary : summary})
        return this.state.summary;
    }
    

    render(){
        return(
            <div className="container">
                <h1>Résultat du jeu</h1><br/><br/>
                {this.state.summary}<br/>
            </div>
        )
    }
}

export default Result;