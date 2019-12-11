import axios from "axios";
class SettingsAPI{

    updateCategory(gameSessionId,categoryId,sorting){
        axios.put('/api/v1/selected_categories',{
            selected_category: {
                sorting : sorting,
                status : false, 
                category_id : categoryId,
                game_session_id : gameSessionId
            }
        }).catch(error => console.log(error))
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
    setStep(gameSessionId,start_date,guardian_comment,prof_comment,step_one,step_two,step_three,finished_state,version,child_id,user_id,mandate_id){
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
   async loadlastSession(childId){
        let session; 
      await axios.post('/api/v1/game_sessions/latest',{
          game_session: {
              child_id : childId
          }
      }).then(response => {session = response.data})
      return session; 
    }
}

export default SettingsAPI;