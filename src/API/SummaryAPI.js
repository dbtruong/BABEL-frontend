import axios from "axios";
class SummaryAPI {

   
    async loadSessions(childId){
        let gameSessions; 
        await axios.post('/api/v1/game_sessions/allDate/'+childId)
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
    getChildSummary(){ 
    let summary = [
    {   date : "13 décembre 2019",
                images : [
                    { name : "/deplacements/bus", like : true, help : true, happy : false, category : "deplacements"},
                    { name : "/loisirs/ecrire", like : false, help : true, happy : false, category : "loisirs"},
                    { name : "/nutrition/manger_mains", like : true, help : true, happy : true, category : "nutrition"},
                    { name : "/deplacements/velo", like : true, help : false, happy : false, category : "deplacement"},
                    
                ]
            },
            {   date : "15 novembre 2019",
                images : [
                    { name : "/deplacements/traverser", like : true, help : false, happy : false,category : "deplacement"},
                    { name : "/deplacements/voiture", like : true, help : false, happy : false,category : "deplacement"},
                    { name : "/habitation/balayer", like : true, help : true, happy : true, category :"habitation"},
                    { name : "/loisirs/ecrire", like : false, help : true, happy : false,category : "loisirs"},
                    { name : "/nutrition/manger_mains", like : true, help : true, happy : true,category : "nutrition"},
                    { name : "/nutrition/boire_tasse", like : true, help : false, happy : true,category : "nutrition"},
                    { name : "/nutrition/sandwich", like : false, help : false, happy : false,category : "nutrition"}
                ]
            },
            {   date : "12 septembre 2019",
                images : [
                    { name : "/deplacements/velo", like : false, help : true, happy : false, category : "deplacement"},
                    { name : "/habitation/ranger_espace", like : true, help : true, happy : false, category :"habitation"},
                    { name : "/relationscom/parler_adultes", like : false, help : true, happy : false, category :"communication"},
                    { name : "/loisirs/casque_ordi", like : true, help : false, happy : false,category : "loisirs"},
                    { name : "/soinspersonnels/dormir", like : false, help : false, happy : true, category :"soins"},
                    { name : "/soinspersonnels/toilettes", like : true, help : false, happy : true,category :"soins"}
                ]
            }
        ]
        return summary
    }
}

export default SummaryAPI;