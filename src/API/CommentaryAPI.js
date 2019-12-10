class commentaryAPI{

    getHabitsByCategory(id){
        /*axios.get('/getHabitsByCategory?ID='+id)
        .then(function (response) {
            return new Map(JSON.parse(response))
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });*/
        var hab1 = new Map();
        hab1.set("id", "01");
        hab1.set("picture", "toilette.jpg");
        hab1.set("nom", "toilette");
        hab1.set("description", "habilité à se couler un bronze seul")
        var hab2 = hab1;
        hab2.set("id", "02");
        return [hab1, hab2];
    }
}

export default commentaryAPI;