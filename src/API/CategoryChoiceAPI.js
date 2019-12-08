import API from "./API.js"

class CategoryChoiceAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/categoryChoice";
    }

    sendCategory(name){
        //axios.get()
        let toSend = {name : name}
        console.log(toSend);
    }
}

export default CategoryChoiceAPI;