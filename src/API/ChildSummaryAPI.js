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
        let images = [
            { name : "bus", like : true, help : true, happy : false},
            { name : "marcher", like : true, help : false, happy : false},
            { name : "velo", like : false, help : true, happy : false}
        ]
        return images;
    }
}

export default ChildSummaryAPI;