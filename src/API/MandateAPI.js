import axios from "axios";

class MandateAPI{

    async sendMandate(childId,instigator,demand,date){
        let id_mandate; 
        await axios.post('/api/v1/mandates',{
        mandate : {
            insert_date : date,
            child_id : childId,
            instigator : instigator,
            demand : demand
        } 
       })
       .then(response => {id_mandate = response.data.id})
       .catch(error => console.log(error))
       return id_mandate;
    }
    createGame(child_id, user_id, mandate_id){
        let gameSessionId; 
        axios.post('/api/v1/game_sessions', {
           game_session : {
            start_date : null,
            guardian_comment : null,
            prof_comment : null, 
            step_one : 1, 
            step_two : 2, 
            step_three : 3,
            finished_state : null,
            version : null, 
            child_id : child_id,
            user_id : user_id,
            mandate_id : mandate_id
           } 
        })
        .then(response => {gameSessionId = response.data.id})
        .catch(error => console.log(error))
       return gameSessionId;
    }

}
export default MandateAPI;