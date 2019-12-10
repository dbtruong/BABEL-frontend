import axios from "axios";

class MandateAPI{

    sendMandate(childId,instigator,demand,date){
       axios.get('/api/v1/children',{
        mandate:{
            insert_date : date,
            id_child : childId,
            instigator : instigator,
            demand : demand
        } 
       }).then(res => console.log(res))
    }

}
export default MandateAPI;