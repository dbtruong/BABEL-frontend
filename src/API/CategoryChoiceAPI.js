import axios from "axios";
class CategoryChoiceAPI{

    sendCategory(id_game,id_category,sorting){
        axios.post('/api/v1/selected_categories',{
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
         await axios.post('/api/v1/game_sessions/getgameforchild/'+childId)
           .then(response => {gameSession = response.data[0].id})
           .catch(error => console.log(error))
           return gameSession;
    }
}


export default CategoryChoiceAPI;