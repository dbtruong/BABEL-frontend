import API from "./API.js"
//import axios from 'axios'

class profChildChoiceAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/choice";
    }

	getChildByProf(id){
        /*axios.get('/getChildByProf?ID='+id)
        .then(function (response) {
            return new Map(JSON.parse(response))
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });*/
        var child1 = new Map();
        child1.set("id", "01");
        child1.set("picture", "jules.jpg");
        child1.set("lastName", "coucou");
        child1.set("firstName", "jules");
        child1.set("birthday", "15 avril 2008");
        child1.set("handicap", "juste con");
        var child2 = new Map();
        child2.set("id", "02");
        child2.set("picture", "benjamin.jpg");
        child2.set("lastName", "Willems");
        child2.set("firstName", "Benjamin");
        child2.set("birthday", "15 avril 2008");
        child2.set("handicap", "toujours en retard");
        var children = [child1, child2]; 
        
		return children;
	}

}

export default profChildChoiceAPI;