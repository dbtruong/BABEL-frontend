import API from "./API.js"

class commentaryAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/choice";
    }

    getHabits(){
        var hab1 = new Map();
        hab1.set("id", "01");
        hab1.set("picture", "toilette.jpg");
        hab1.set("nom", "toilette");
        hab1.set("description", "habilité à se couler un bronze seul")
        var hab2 = hab1;
        hab2.set("id", "02");
        return [hab1, hab2];
    }
}

export default commentaryAPI;