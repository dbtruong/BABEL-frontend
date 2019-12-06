import API from "./API.js"
//import axios from 'axios'

class choiceAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/choice";
    }

	getHabits(){
		return 'Images/habit.jpg'
	}

}

export default choiceAPI;