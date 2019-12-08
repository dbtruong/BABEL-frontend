import API from "./API.js"

class SettingsAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/settings";
    }

    sendCategory(name){
        //axios.get()
        let toSend = {name : name}
        console.log(toSend);
    }
}

export default SettingsAPI;