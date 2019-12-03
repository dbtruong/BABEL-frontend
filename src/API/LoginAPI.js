//Login endpoint

import API from "./API.js"
import axios from 'axios'

class LoginAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/login";
    }

    checkLogin(){
        axios.post(
            this.endpoint,
            { login : "test"},
            { password : "test"}
        ).then(res => {
            console.log(res.data);
        })
    }

}

export default LoginAPI;