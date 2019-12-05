//ChildSummary endpoint

import API from "./API.js"
import axios from 'axios'

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
            { name : "img1", like : true, help : true, happy : false},
            { name : "img2", like : true, help : true, happy : false},
            { name : "img3", like : true, help : true, happy : false}
        ]
        return images;
    }
}

export default ChildSummaryAPI;