//Login endpoint

import axios from "axios";

class LoginAPI{

    //Check if login is correct
    async checkLogin(login, password){
        let response;
        await axios.post('https://esope-prod.herokuapp.com/api/v1/users/login',{
            user: {
                email : login,
                pwd : password 
            }
        })
        .then(res =>{
            response = res;
        })
        .catch(error => console.log(error))
        return response.data;
    }



    // getTest(){
    //     axios.get('/api/v1/children_contacts')
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))
    // }
}

export default LoginAPI;