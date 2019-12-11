import axios from 'axios'

class commentaryAPI{

    async getHabitsByCategory(id){
        var habits = [];
        await axios.post('/api/v1/categories/allPictures/', {id:id})
        .then(function (response) {
            response.data.array.forEach(function(element){
                var habit = new Map();
                habit.set("id", element.id);
                habit.set("picture", element.path)
                habits.push(habit);
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        
        return habits;
    }
}

export default commentaryAPI;