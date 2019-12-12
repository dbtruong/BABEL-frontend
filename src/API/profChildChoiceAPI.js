import axios from 'axios'

class profChildChoiceAPI{

	async getChildByProf(id){
        var children = [];
        await axios.post('/api/v1/professionals_to_children/listChildren/',{id : id})
        .then(function (response) {
            console.log("coucou");
            response.data.forEach(function(element){
                var child = new Map();
                child.set("id", element.id);
                child.set("picture", element.imagepath);
                child.set("lastName", element.name);
                child.set("firstName", element.surname);
                child.set("birthday", element.birthday);
                child.set("handicap", element.handicap);
                children.push(child);
            });
            console.log(children);
            return children;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        return children;
    }
    
    selectChildren(id){
        axios.post()
    }

}

export default profChildChoiceAPI;