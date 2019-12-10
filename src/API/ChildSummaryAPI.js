import axios from 'axios'

class ChildSummaryAPI{

    async getChildSummary(){
        let response;
        await axios.post('/api/v1/game_sessions/latest/1')
        .then(res => response = res.data)
        .catch(error => console.log(error));

        console.log(response)
        let array = [];
        for(let i = 0; i < response.length; i++){
            let tempArray = [];
            let date = new Date(response[i].insert_date);
            let tempObject = {
                name : response[i].id,
                like : response[i].do_like,
                help : response[i].is_autonomous,
                happy : response[i].is_happy
            }
            tempArray.push(tempObject);
            array.push({
                date : date,
                images : tempArray
            })
        }
        console.log(array);

        //response doit être un json qui contient images et un attribut date
        let summary = [
            {   date : "3 décembre 2019",
                images : [
                    { name : "bus", like : true, help : true, happy : false},
                    { name : "marcher", like : true, help : false, happy : false},
                    { name : "velo", like : false, help : true, happy : false}
                ]
            }
        ]
        console.log("ideal : ", summary)
        return summary;
    }
}

export default ChildSummaryAPI;