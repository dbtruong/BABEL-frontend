import axios from "axios";
class SettingsAPI{

    async loadCategories(category){
        let categories; 
        await axios.post('/api/v1/selected_categories/choosenCategories/'+category)
        .then(response => {categories = response.data})
        return categories; 
    }

    updateCategory(selectedCatId,gameSessionId,categoryId,sorting){
        axios.put('/api/v1/selected_categories/'+selectedCatId,{
            selected_category: {
                sorting : sorting,
                status : false, 
                category_id : categoryId,
                game_session_id : gameSessionId
            }
        }).catch(error => console.log(error))
    }
    async getGameSession(childId){
        let gameSession; 
       await axios.post('/api/v1/game_sessions/getgameforchild/'+childId)
       .then(response => {gameSession = response.data})
        return gameSession;
    }
    setStep(gameSessionId,start_date,guardian_comment,prof_comment,step_one,step_two,step_three,finished_state,version,child_id,user_id,mandate_id){
        axios.put('/api/v1/game_sessions/'+gameSessionId,{
            game_session: {
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
        axios.put('/api/v1/game_sessions/'+gameSessionId,{
            game_session: {
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