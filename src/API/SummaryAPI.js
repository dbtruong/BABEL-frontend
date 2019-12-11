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
}

export default SummaryAPI;