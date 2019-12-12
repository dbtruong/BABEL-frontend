import axios from "axios";
class CategoryChoiceAPI{

    async sendCategory(id_game,id_category,sorting){
        await axios.post('https://esope-prod.herokuapp.com/api/v1/selected_categories',{
            selected_category: {
                sorting : sorting,
                status : false, 
                category_id : id_category,
                game_session_id : id_game
            }
        })
    }
    async getGameSessionId(childId){ 
        let gameSession; 
         await axios.post('https://esope-prod.herokuapp.com/api/v1/game_sessions/latest/'+childId)
           .then(response => {gameSession = response.data[0].game_id})
           .catch(error => console.log(error))
           return gameSession;
    }
}


export default CategoryChoiceAPI;