//ChildSummary endpoint

import API from "./API.js"
//import axios from 'axios'

class ChildSummaryAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/childSummary";
    }

    getChildSummary(){
        // const response = await axios.get(this.endpoint);
        // console.log(response.data);
        // return response.data;

        //response doit être un json qui contient images et un attribut date
        let summary = [
            {date : "3 décembre 2019",
            images : [
                { name : "bus", like : true, help : true, happy : false},
                { name : "marcher", like : true, help : false, happy : false},
                { name : "velo", like : false, help : true, happy : false}
            ]
            }
        ]
        // let date = {date : "3 décembre 2019"}

        // let images = [
        //     { name : "bus", like : true, help : true, happy : false},
        //     { name : "marcher", like : true, help : false, happy : false},
        //     { name : "velo", like : false, help : true, happy : false}
        // ]
        return summary;
    }
}

export default ChildSummaryAPI;