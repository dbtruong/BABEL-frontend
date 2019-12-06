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

    getTest(){
        let user = {
            name: "",
            password: ""
        }

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data =>console.log(data))
    }

}

export default LoginAPI;