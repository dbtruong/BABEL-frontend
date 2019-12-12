import axios from "axios";

class ResultAPI{

    getResult(){
        let resultLike = JSON.parse(localStorage.getItem("picturesLike"))
        let resultHelp = JSON.parse(localStorage.getItem("picturesHelp"))
        let resultHappy = JSON.parse(localStorage.getItem("picturesHappy"))

        let toReturn = []

        for (let i = 0; i < resultLike.length; i++) {
            let temp = {
                path : resultLike[i].name,
                like : resultLike[i].res,
                help : resultHelp[i].res,
                happy : resultHappy[i].res
            }
            toReturn.push(temp);
        }
        //console.log(toReturn);
        return toReturn
    }
}

export default ResultAPI;