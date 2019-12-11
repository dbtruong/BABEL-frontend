import axios from "axios";
class SummaryAPI {

   
    loadSessions(childId){
        let gameSessions; 
        axios.post('/api/v1/game_sessions',{
            game_session : {
                child_id : childId
            }
        })
        .then(response => {gameSessions = response.data})
        .catch(error => console.log(error))
        return gameSessions; 
    }
     loadSummary(GameSession){
        let summary;
        axios.post('/api/v1/selected_pictures',{
            selected_picture : {
                game_session_id : GameSession
            }
        }) 
        .then(response => {summary = response.data})
        .catch(error => console.log(error))
        return summary;
    }
    async loadPicture(id_picture){
        let picture; 
        axios.post('/api/v1/pictures',{
            picture : {
                id : id_picture
            }
        }).then(response => {picture= response.data})
        .catch(error => console.log(error))
        return picture;
    }
    async getGameSession(gameSessionId){
        let gameSession; 
       await axios.put('/api/v1/game_sessions',{
            game_session: {
                id : gameSessionId
            }
        }).then(response => {gameSession = response.data})
        return gameSession;
    }
    updateChildSession(gameSessionId,start_date,guardian_comment,prof_comment,step_one,step_two,step_three,finished_state,version,child_id,user_id,mandate_id){
        axios.put('/api/v1/game_sessions',{
            game_session: {
                id : gameSessionId,
                start_date : start_date,
                guardian_comment : guardian_comment,
                prof_comment : prof_comment,
                step_one : step_one,
                step_two : step_two,
                step_three : step_three,
                finished_state : finished_state,
                version : version,
                child_id : child_id,
                user_id : user_id,
                mandate_id : mandate_id
            }
        }).catch(error => console.log(error))
    }
}

export default SummaryAPI;