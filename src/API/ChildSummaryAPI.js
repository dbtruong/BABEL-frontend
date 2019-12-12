import axios from 'axios'

class ChildSummaryAPI{

    async getChildSummary(){
        let response;
        await axios.post('https://esope-prod.herokuapp.com/api/v1/game_sessions/latest/1')
        .then(res => response = res.data)
        .catch(error => console.log(error));

        //Put every images in an array and send objects for the summary
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

        //response doit être un json qui contient images et un attribut date
        let summary = [
            {   date : "3 décembre 2019",
                images : [
                    { name : "/deplacements/bus", like : true, help : true, happy : false},
                    { name : "/deplacements/marcher", like : true, help : false, happy : false},
                    { name : "/habitation/vaisselle", like : false, help : true, happy : true},
                    { name : "/loisirs/casque_ordi", like : true, help : false, happy : false},
                    { name : "/loisirs/television", like : true, help : false, happy : true},
                    { name : "/soinspersonnels/brosser_dents", like : false, help : true, happy : true}
                ]
            },
            {   date : "15 novembre 2019",
                images : [
                    { name : "/deplacements/traverser", like : true, help : false, happy : false},
                    { name : "/deplacements/voiture", like : true, help : false, happy : false},
                    { name : "/habitation/balayer", like : true, help : true, happy : true},
                    { name : "/loisirs/ecrire", like : false, help : true, happy : false},
                    { name : "/nutrition/boire_tasse", like : true, help : false, happy : true},
                    { name : "/nutrition/sandwich", like : false, help : false, happy : false}
                ]
            },
            {   date : "12 septembre 2019",
                images : [
                    { name : "/deplacements/velo", like : false, help : true, happy : false},
                    { name : "/habitation/ranger_espace", like : true, help : true, happy : false},
                    { name : "/relationscom/parler_adultes", like : false, help : true, happy : false},
                    { name : "/loisirs/casque_ordi", like : true, help : false, happy : false},
                    { name : "/soinspersonnels/dormir", like : false, help : false, happy : true},
                    { name : "/soinspersonnels/toilettes", like : true, help : false, happy : true}
                ]
            }
        ]
        return summary;
    }
}

export default ChildSummaryAPI;