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

    componentDidMount(){
        let images = this.api.getChildSummary();
        let list = images.map((img) => {
            let name = img.name;
            let like = img.like;
            let help = img.help;
            let happy = img.happy;

            return (
                <div>
                    <p>{name}</p>
                    <p>{like}</p>
                    <p>{help}</p>
                    <p>{happy}</p>
                </div>
            );
        });
        this.setState({ listImages : list})
        console.log(images);
    }

    render(){
        console.log(this.state.listImages);
        return(
            <div>
                {this.state.listImages}
            </div>
        )
    }
}

export default ChildSummary;