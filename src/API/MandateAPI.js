import axios from "axios";

class MandateAPI{

    sendMandate(childId,instigator,demand,date){
       axios.post('/api/v1/mandates',{
        mandate:{
            insert_date : date,
            id_child : childId,
            instigator : instigator,
            demand : demand
        } 
       })
    }

}
export default MandateAPI;