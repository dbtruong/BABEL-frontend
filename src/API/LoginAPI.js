//Login endpoint

import API from "./API.js"
//import axios from 'axios'

class LoginAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/login";
    }

    //test with await if doesn't work
    checkLogin(login, password){
        // Uncomment to link with backend
        // axios.post(
        //     this.endpoint,
        //     { login : login},
        //     { password : password}
        // ).then(res => {
        //     //console.log(res.data);
        //     return res.data;
        // })
        return login + " " + password
    }

}

export default LoginAPI;