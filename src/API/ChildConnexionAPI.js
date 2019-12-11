import axios from 'axios'

class ChildConnexionAPI{

	async getChildSession(id){
        if (isNaN(id) || id == ""){
            id = 0
        }
        let response;
        await axios.post('/api/v1/children/login',{
            child : {
                id : id
            }
        })
        .then(res => {
            response = res;
        })
        .catch(error => console.log(error))
        return response.data
    }

}

export default ChildConnexionAPI;