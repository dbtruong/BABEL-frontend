import API from "./API.js"

class SummaryAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/summary";
    }

    sendCategory(name){
        //axios.get()
        let toSend = {name : name}
        console.log(toSend);
    }
    loadSessions(){
        //axios.get()
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

export default SummaryAPI;