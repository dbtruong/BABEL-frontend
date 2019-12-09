import axios from 'axios'

class ChildConnexionAPI{

	getChildSession(id){
         // Uncomment to link with backend
        // axios.post(
        //     this.endpoint,
        //     { idchild : id}
        // ).then(res => {
        //     //console.log(res.data);
        //     return res.data;
        // })
        console.log(id);
    }

}

export default ChildConnexionAPI;