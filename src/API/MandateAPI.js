import axios from "axios";

class MandateAPI{

    sendMandate(childId,instigator,demand,date){
        let id_mandate; 
        axios.post('/api/v1/mandates',{
        mandate : {
            insert_date : date,
            child_id : 9,
            instigator : "dave",
            demand : "youlou youlou"
        } 
       })
       .then(response => {id_mandate = response.data.id})
       .catch(error => console.log(error))
       return id_mandate;
    }

}
export default MandateAPI;